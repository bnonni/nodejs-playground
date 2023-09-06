import { get } from 'https';

get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let content = '';

  // push data character by character to "content" variable
  resp.on('data', (c) => content += c);

  // when finished reading all data, parse it for what we need now
  resp.on('end', () => {

    let jsonContent = JSON.parse(content);
    let jsonContentArray = jsonContent.data.split(',');
    let keyArray = [];
    console.log(jsonContentArray``)
    for (let i = 0; i < jsonContentArray.length; i++) {
      let keySplit = jsonContentArray[i].trim().split('=');
    if(keySplit[0] === 'key') keyArray.push(keySplit[1])
    }

    console.log(keyArray)
    

    console.log(keyArray.filter((_, i) => i >= 10 && i <= 15).join())

  });

});

/*

[
  'key=IAfpK',  ' age=58',    ' key=WNVdi', ' age=64',    ' key=jp9zt',
  ' age=47',    ' key=0Sr4C', ' age=68',    ' key=CGEqo', ' age=76',
  ' key=IxKVQ', ' age=79',    ' key=eD221', ' age=29',    ' key=XZbHV',
  ' age=32',    ' key=k1SN5', ' age=88',    ' key=4SCsU', ' age=65',
  ' key=q3kG6', ' age=33',    ' key=MGQpf', ' age=13',    ' key=Kj6xW',
  ' age=14',    ' key=tg2VM', ' age=30',    ' key=WSnCU', ' age=24',
  ' key=f1Vvz', ' age=46',    ' key=dOS7A', ' age=72',    ' key=tDojg',
  ' age=82',    ' key=nZyJA', ' age=48',    ' key=R8JTk', ' age=29',
  ' key=005Ot', ' age=66',    ' key=HHROm', ' age=12',    ' key=5yzG8',
  ' age=51',    ' key=xMJ5D', ' age=38',    ' key=TXtVu', ' age=82',
  ' key=Hz38B', ' age=84',    ' key=WfObU', ' age=27',    ' key=mmqYB',
  ' age=14',    ' key=4Z3Ay', ' age=62',    ' key=x3B0i', ' age=55',
  ' key=QCiQB', ' age=72',    ' key=zGtmR', ' age=66',    ' key=nlIN9',
  ' age=8',     ' key=hKalB', ' age=50',    ' key=Na33O', ' age=17',
  ' key=jMeXm', ' age=15',    ' key=OO2Mc', ' age=32',    ' key=hhowx',
  ' age=34',    ' key=gLMJf', ' age=60',    ' key=PblX6', ' age=66',
  ' key=8Vm5W', ' age=22',    ' key=oZKd6', ' age=88',    ' key=RXNfQ',
  ' age=25',    ' key=3yy0p', ' age=64',    ' key=FrQbL', ' age=80',
  ' key=vlUkk', ' age=55',    ' key=DP8po', ' age=80',    ' key=EroX6',
  ' age=84',    ' key=3bsll', ' age=86',    ' key=QhZjA', ' age=85',
  ... 500 more items
]

[
  'IAfpK', '58',    'WNVdi', '64',    'jp9zt', '47',    '0Sr4C',
  '68',    'CGEqo', '76',    'IxKVQ', '79',    'eD221', '29',
  'XZbHV', '32',    'k1SN5', '88',    '4SCsU', '65',    'q3kG6',
  '33',    'MGQpf', '13',    'Kj6xW', '14',    'tg2VM', '30',
  'WSnCU', '24',    'f1Vvz', '46',    'dOS7A', '72',    'tDojg',
  '82',    'nZyJA', '48',    'R8JTk', '29',    '005Ot', '66',
  'HHROm', '12',    '5yzG8', '51',    'xMJ5D', '38',    'TXtVu',
  '82',    'Hz38B', '84',    'WfObU', '27',    'mmqYB', '14',
  '4Z3Ay', '62',    'x3B0i', '55',    'QCiQB', '72',    'zGtmR',
  '66',    'nlIN9', '8',     'hKalB', '50',    'Na33O', '17',
  'jMeXm', '15',    'OO2Mc', '32',    'hhowx', '34',    'gLMJf',
  '60',    'PblX6', '66',    '8Vm5W', '22',    'oZKd6', '88',
  'RXNfQ', '25',    '3yy0p', '64',    'FrQbL', '80',    'vlUkk',
  '55',    'DP8po', '80',    'EroX6', '84',    '3bsll', '86',
  'QhZjA', '85',
  ... 500 more items
]
  [
  'IAfpK', 'WNVdi', 'jp9zt', '0Sr4C', 'CGEqo', 'IxKVQ', 'eD221',
  'XZbHV', 'k1SN5', '4SCsU', 'q3kG6', 'MGQpf', 'Kj6xW', 'tg2VM',
  'WSnCU', 'f1Vvz', 'dOS7A', 'tDojg', 'nZyJA', 'R8JTk', '005Ot',
  'HHROm', '5yzG8', 'xMJ5D', 'TXtVu', 'Hz38B', 'WfObU', 'mmqYB',
  '4Z3Ay', 'x3B0i', 'QCiQB', 'zGtmR', 'nlIN9', 'hKalB', 'Na33O',
  'jMeXm', 'OO2Mc', 'hhowx', 'gLMJf', 'PblX6', '8Vm5W', 'oZKd6',
  'RXNfQ', '3yy0p', 'FrQbL', 'vlUkk', 'DP8po', 'EroX6', '3bsll',
  'QhZjA', 'wm6uc', 'MC1FM', 'AMxZr', 'ee03Q', '9fGea', '3TE9U',
  'FoSMR', '4To0X', '5CZY3', 'qFvKG', 'W7bUh', 'htab7', 'KRyu2',
  'GLkk7', 'jnXf6', 'YBTJ9', 'auL0J', 'ZHmmd', '01iNV', '7ldyh',
  'TjXbT', 'ochyW', 'lsGXW', '5o7Bd', 'APWEf', 'LRmKc', 'uZIoQ',
  'Zf79H', 'NrpEI', 'XzYKx', 'kk0sU', 'p5uue', 'WscQQ', 'tRogh',
  'ur4rW', 'IkCeS', 'vtGK4', 'C87cQ', '0qXDb', 'KtBjN', 'f2h36',
  'tGzgU', 'hIrPv', 'Tq7IX', 'F4k9K', '9duxK', 'jTHDj', '6GHpE',
  'ye9us', 'eOfZO',
]
*/