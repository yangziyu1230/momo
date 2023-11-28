/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    "https://www.maimemo.com/page?sid=4fa2da89830df477574fd2ede4165f7f&uid=2843794&pid=19841328f10ef1667812ccff052f6f9e&tid=98895e9aeea5bbdc2cc946163d5ee164&view_time=1701177216&bind_user=0&create_user=0&tid=98895e9aeea5bbdc2cc946163d5ee164&sid=4fa2da89830df477574fd2ede4165f7f&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDitz25aqSORthmZc9vxF6-FEA&token=27b50be5a67d14a196928a68cf7da1c30c494d0c7b72e50ac8fd13ea685de2a6",
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
