import express, { Application } from 'express';
import morgan from 'morgan';

//Route
import IndexRoutes from './routes/index.routes';
import TaskRoutes from './routes/task.routes';

class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    require("dotenv").config();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3030);
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use('/task', TaskRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('CarBoard API Server On Port', this.app.get('port'));
  }
};

export default App;