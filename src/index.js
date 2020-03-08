const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "D:\\chrome-win\\chrome.exe",
    headless: true,
  });
  const page = await browser.newPage();
  // page.setDefaultNavigationTimeout(60000)

  await page.goto('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E6%97%B6%E9%97%B4');
  console.log("load first page!")
  const time = await page.$eval(".op-beijingtime-time", item => item.innerText)
  console.log(time)
  await browser.close()
})();

// const modifyPage = async page => {
//   // 隐藏头、目录
//   const aside = await page.$(".sc-hSdWYo")
//   const header = await page.$(".sc-eNQAEJ")
//   await page.evaluate(el => {
//     el.style = "display: none;"
//   }, aside)
//   await page.evaluate(el => {
//     el.style = "display: none;"
//   }, header)
//   console.log("set style done!")

//   // 获取所有的文本节点里的文本，拿出来翻译
//   const allText = await page.$$eval("p, li", pli => {
//     // const allText = [...pli].reduce((pre, cur) => [...pre, ...cur.childNodes], []).filter(item => item.nodeName === "#text").map(item => item.data)
//     const allText = [...pli].map(item => item.innerText)
//     return allText
//   })

//   // 翻译
//   const translateResult = await translate(allText)

//   // 拿进去替换
//   await page.evaluate(translateResult => {
//     const pli = document.querySelectorAll("p, li")
//     // const allTextNodes = [...pli].reduce((pre, cur) => [...pre, ...cur.childNodes], []).filter(item => item.nodeName === "#text")
//     // allTextNodes.forEach((item, key) => item.replaceWith(translateResult[key]))
//     pli.forEach((item, key) => item.innerHTML = translateResult[key])
    
//   }, translateResult)
// }