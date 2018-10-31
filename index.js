#! /usr/bin/env node

const program = require('commander')
const main = require('./lib/main')
program
    .command('create')
    .description('创建项目')
    .action(() => {
        main.create()
    })
program
    .command('dev')
    .description('开发模式')
    .action(() => {
        main.dev()
    })
program.parse(process.argv);
