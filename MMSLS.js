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
    "https://www.maimemo.com/share/page?uid=2843794&pid=0517da4ff29a79acb5da1c587380e9b4&tid=501a6d524565bf25cd79391b605cdc02",
    "https://www.maimemo.com/share/page?uid=2843794&pid=0517da4ff29a79acb5da1c587380e9b4&tid=501a6d524565bf25cd79391b605cdc02",
    "https://www.maimemo.com/share/page?uid=2843794&pid=0517da4ff29a79acb5da1c587380e9b4&tid=501a6d524565bf25cd79391b605cdc02",
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
