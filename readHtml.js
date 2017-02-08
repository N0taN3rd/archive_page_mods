const cheerio = require('cheerio')
const fs = require('fs-extra')
const Promise = require('bluebird')
const path = require('path')
const generate = require('babel-generator')
const traverse = require('babel-traverse')
const {parse} = require('babylon')
const util = require('util')
const bTypes = require('babel-types')
const inlineCss = require('inline-css')
const juice = require('juice')

Promise.promisifyAll(fs)

const here = process.cwd()

const getDom = async path => cheerio.load(await fs.readFileAsync(path, 'utf8'))

const isWindowAssign = node => {
  const left = node.left
  return bTypes.isMemberExpression(left) &&
    bTypes.isLiteral(bTypes.toComputedKey(left, left.property), {value: 'domain'})
}

const dlHtml = '/home/john/WebstormProjects/archive_page_mods/cnn/CNN - Breaking News, Latest News and Videos.html'
const doIt = async () => {
  const $ = await getDom(dlHtml)
  let options = {
    inlinePseudoElements: true,
    preserveImportant: true,
    removeStyleTags: true,
    preserveMediaQueries: false
  }
  juice.juiceFile(dlHtml, options, async (err, html) => {
    console.log(html)
    await fs.writeFileAsync('juiced.html', html, 'utf8')
  })
  // $('script:not([src]),script[src=""]').each(function (i, elem) {
  //   const ast = parse($(this).text())
  //   let found = false
  //   traverse.default(ast, {
  //     AssignmentExpression(path) {
  //       if (!isWindowAssign(path.node)) {
  //         return
  //       }
  //       if (path.node.left.object.property.name === 'document') {
  //         console.log(path.scope)
  //         path.remove()
  //         found = true
  //       }
  //     }
  //   })
  //   if (found) {
  //     $(this).text(generate.default(ast, null, '').code)
  //   }
  // })
  //
  //
  // await fs.writeFileAsync('mod.html', $.html(), 'utf8')
}

doIt()


