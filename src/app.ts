import express, { Application } from 'express';

class App {
  private app: Application;
  constructor() {
    this.app = express();
  }
  async listen() {
    await this.app.listen(3030);
    console.log('Server On Port', 3030);
  }
};

export default App;