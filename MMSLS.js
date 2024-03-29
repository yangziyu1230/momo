/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    "https://www.maimemo.com/share/page?uid=2843794&pid=779b830e517c2506c44f70919b75a457&tid=1e46aacd558f5db03d35cdf1d0531404",
    "https://www.maimemo.com/share/page?uid=2843794&pid=779b830e517c2506c44f70919b75a457&tid=1e46aacd558f5db03d35cdf1d0531404",
    "https://www.maimemo.com/share/page?uid=2843794&pid=779b830e517c2506c44f70919b75a457&tid=1e46aacd558f5db03d35cdf1d0531404",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=2843794&pid=c7b18cfbfe8ed5355ccda9d5ce9e32eb&tid=151c0aec9bbe8685f4b24d3e4bf614cb",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
