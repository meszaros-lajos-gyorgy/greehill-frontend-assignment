import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'
import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import { DefinePlugin } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const getPackageJSON = async () => {
  let packageJSON

  try {
    packageJSON = JSON.parse(await fs.promises.readFile('./package.json'))
  } catch (e) {
    console.error('Nem sikerült beolvasni a package.json-t', e)
    packageJSON = {}
  }

  return packageJSON
}

const getCommitHash = async () => {
  let commitHash = ''

  try {
    const { stdout } = await promisify(exec)('git rev-parse --short HEAD')
    commitHash = stdout.trim()
  } catch(e) {
    console.error('Nem sikerült beolvasni a commit hash-t', e)
  }

  return commitHash
}

const commonConfig = (env) => {
  return {
    entry: {
      gol: [
        path.resolve('src/index.jsx')
      ]
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          include: [/\.module\./],
          use: [
            env.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 3,
                modules: {
                  localIdentName: '[local]_[hash:base64:5]'
                }
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'resolve-url-loader',
              options: { sourceMap: true }
            },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        },
        {
          test: /\.s?css$/,
          exclude: [/\.module\./],
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 3
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'resolve-url-loader',
              options: { sourceMap: true }
            },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        },
        {
          test: /\.(svg|png|jpg)$/,
          include: [path.resolve(__dirname, 'src')],
          use: {
              loader: 'file-loader',
              options: {
                  name: '[name].[contenthash].[ext]',
                  outputPath: 'img'
              }
          }
        }
      ]
    },
    resolve: {
      alias: {
        // https://github.com/benmosher/eslint-plugin-import/issues/1306
        // '@': path.resolve('src'),
        'react-dom': '@hot-loader/react-dom'
      },
      extensions: ['.js', '.json', '.jsx', '.scss', '.css']
    },
    optimization: {
      minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
      splitChunks: {
        cacheGroups: {
          common: {
            test: /[\\/]node_modules[\\/]/,
            name: 'common',
            chunks: 'all'
          }
        }
      }
    },
    devServer: {
      // inline: true,
      hot: true,
      // public: '',
      // disableHostCheck: true,
      static: {
        publicPath: ''
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      }
    }
  }
}

const productionConfig = (env, dataForDefinePlugin = {}) => {
  return {
    ...commonConfig(env),
    output: {
      path: path.resolve('dist'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: env?.env?.root || '.'
    },
    mode: 'production',
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        minify: false,
        xhtml: true
      }),
      new DefinePlugin(dataForDefinePlugin),
      new CleanWebpackPlugin({
        verbose: true,
        cleanOnceBeforeBuildPatterns: [path.resolve('dist/**')]
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ]
  }
}
const developmentConfig = (env, dataForDefinePlugin = {}) => {
  return {
    ...commonConfig(env),
    output: {
      path: path.resolve('dist'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: 'http://localhost:8080/'
    },
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        minify: false,
        xhtml: true
      }),
      new DefinePlugin(dataForDefinePlugin),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ]
  }
}

export default async (_, env) => {
  const packageJSON = await getPackageJSON()
  const commitHash = await getCommitHash()

  const dataForDefinePlugin = {
    VERSION: `"${packageJSON.version}"`,
    HASH: `"${commitHash}"`
  }

  if (env.mode === 'production') {
    return productionConfig(env, dataForDefinePlugin)
  } else {
    return developmentConfig(env, dataForDefinePlugin)
  }
}
