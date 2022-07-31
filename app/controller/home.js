'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.session.counter);
    ctx.body = 'hello, egg';
  }

  async girl() {
    const { ctx } = this;
    console.log(ctx.session.count);
    ctx.body = ctx.query;
  }

  async girlName() {
    const { ctx } = this;
    ctx.body = ctx.params.name;
  }

  async add() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }

  async getGirl() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = await ctx.service.home.getGirl(id);
    await this.ctx.render('getGirl.html', { res });
  }
}

module.exports = HomeController;
