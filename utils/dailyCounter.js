export class DailyCounter {
  constructor(key, maxCount = 99) {
    this.key = key; // localStorage的键名
    this.maxCount = maxCount; // 最大计数值
    this.initCounter();
  }

  // 初始化计数器
  initCounter() {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem(this.key);

    if (storedData) {
      const { date, count } = JSON.parse(storedData);
      if (date === today) {
        this.count = count;
        return;
      }
    }

    // 如果日期不同或没有存储数据，重置计数器
    this.count = 1;
    this.saveCounter();
  }

  // 增加计数
  increment() {
    if (this.count < this.maxCount) {
      this.count++;
      this.saveCounter();
    }
    return this.count;
  }

  // 获取当前计数
  getCount() {
    return this.count;
  }

  // 保存计数器到localStorage
  saveCounter() {
    const today = new Date().toDateString();
    localStorage.setItem(
      this.key,
      JSON.stringify({
        date: today,
        count: this.count
      })
    );
  }

  // 重置计数器
  reset() {
    this.count = 1;
    this.saveCounter();
  }
}
export const dailyCounter = new DailyCounter("dailyCounter");

// 使用示例
// const printCounter = new DailyCounter("printCounter");
// console.log(printCounter.getCount()); // 获取当前计数
// printCounter.increment(); // 增加计数
// console.log(printCounter.getCount()); // 获取增加后的计数
