import { cac } from 'cac';
import { Reg } from './reg';

const cli = cac('XLex');

const params = cli.parse();

const reg = new Reg('(a|b)(c|d)');

console.log(JSON.stringify(reg.root, null, 2));
