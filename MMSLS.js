/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    "https://www.maimemo.com/share/page?uid=2843794&pid=2ffa64518d9d179594e3a779b52eb850&tid=318a19f199a2ec0469cea65681279325",
    "https://www.maimemo.com/share/page?uid=2843794&pid=2ffa64518d9d179594e3a779b52eb850&tid=318a19f199a2ec0469cea65681279325",
    "https://www.maimemo.com/share/page?uid=2843794&pid=2ffa64518d9d179594e3a779b52eb850&tid=318a19f199a2ec0469cea65681279325",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=2843794&pid=f54216ff5fa938577130c7f6e11facf4&tid=13b2223b509572828a253a867fdcfbf5",
    "https://www.maimemo.com/share/page?uid=2843794&pid=f54216ff5fa938577130c7f6e11facf4&tid=13b2223b509572828a253a867fdcfbf5",
    "https://www.maimemo.com/share/page?uid=2843794&pid=f54216ff5fa938577130c7f6e11facf4&tid=13b2223b509572828a253a867fdcfbf5",
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
