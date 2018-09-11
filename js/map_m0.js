$.dSpriteSheet = [
'character',
'block-green',
'block-red',
'block-purple',
'block-blue',
'block-yellow',
'item-key-green',
'item-key-purple',
'item-key-blue',
'item-key-yellow',
'npc-face1-green',
'npc-face1-purple',
'npc-face1-blue',
'npc-face1-yellow',
'npc-face1-red',
'enemy-face1-green',
];

$.stageMap = {
'w':45,
'h':45,
'd':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,2,2,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,3,3,3,3,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,6,6,6,1,0,0,6,1,1,8,8,8,8,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,6,6,6,1,0,0,6,1,1,8,8,8,8,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,6,6,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,6,6,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,6,6,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,7,7,7,7,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,7,7,7,7,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,6,6,7,7,7,7,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,6,6,7,7,7,7,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,4,4,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,4,4,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
};

$.stageMapEntities = {
'1':
{
's':'1',
'c':'1',
'clr':'green',
'f':'block-green',
'm':'b',
},
'2':
{
's':'0',
'c':'0',
'clr':'green',
'f':'block-green',
'm':'b',
},
'11':
{
's':'1',
'c':'1',
'clr':'red',
'f':'block-red',
'm':'b',
},
'12':
{
's':'0',
'c':'0',
'clr':'red',
'f':'block-red',
'm':'b',
},
'3':
{
's':'1',
'c':'1',
'clr':'purple',
'f':'block-purple',
'm':'b',
},
'4':
{
's':'0',
'c':'0',
'clr':'purple',
'f':'block-purple',
'm':'b',
},
'5':
{
's':'1',
'c':'1',
'clr':'blue',
'f':'block-blue',
'm':'b',
},
'6':
{
's':'0',
'c':'0',
'clr':'blue',
'f':'block-blue',
'm':'b',
},
'7':
{
's':'1',
'c':'1',
'clr':'yellow',
'f':'block-yellow',
'm':'b',
},
'8':
{
's':'0',
'c':'0',
'clr':'yellow',
'f':'block-yellow',
'm':'b',
},
'key_1':
{
's':'0',
'c':'1',
'f':'item-key-green',
'x':'1210.9696969697',
'y':'403.09090909091',
't':'item_key',
'cx':'9',
'cy':'3',
'm':'item',
'actions':{
'on':'green',
}
},
'key_2':
{
's':'0',
'c':'1',
'f':'item-key-purple',
'x':'3314.0606060606',
'y':'1511.6363636364',
't':'item_key',
'cx':'25',
'cy':'11',
'm':'item',
'actions':{
'on':'purple',
}
},
'key_3':
{
's':'0',
'c':'1',
'f':'item-key-blue',
'x':'228',
'y':'1380',
't':'item_key',
'cx':'1',
'cy':'10',
'm':'item',
'actions':{
'on':'blue',
}
},
'key_4':
{
's':'0',
'c':'1',
'f':'item-key-yellow',
'x':'2148',
'y':'1508',
't':'item_key',
'cx':'16',
'cy':'11',
'm':'item',
'actions':{
'on':'yellow',
}
},
'npc_1':
{
's':'1',
'c':'1',
'f':'npc-face1-green',
'x':'500.12121212121',
'y':'482.42424242424',
't':'npc_face1',
'cx':'3',
'cy':'3',
'm':'npc',
'actions':{
'message':'Hi, I\'m Clippy, the office assistant. Would you like some assistance today?|Actually, I\'d like to..|It looks like you are trying to write a letter. Here\'s a list of stuff you can do: Write in bold, set Comic Sans as font, use WordArt to..|Stop! I\'m trying to find the way out of here and get to the Internet before this computer dies..|Are you sure you don\'t want to write in bold?|We are dying here! You will die too!|Haha..I\'ve been dead for a while, buddy! Check with Flash, he knows about Internet stuff.. buy him a drink, he needs it.|Got it! Thanks!|Oh my Word, I finally helped somebody!',
'on':'key_1',
}
},
'npc_2':
{
's':'1',
'c':'1',
'f':'npc-face1-purple',
'x':'2758.4242424242',
'y':'993.93939393939',
't':'npc_face1',
'cx':'21',
'cy':'7',
'm':'npc',
'actions':{
'message':'Is that a beer?|Are you Flash?|"Are you Flash?" Who\'s asking? Don\'t care! Give me the beer and leave me alone, I\'m dying!|We all are! Look,I\'m trying to get to the Internet..|What for?|To spread and destroy all communications.|Yay!That would kill smartphones! Talk to MrAffe, he was nice to me.. You\'ll need a disguise: this will be enough.|Great!',
'on':'key_2',
}
},
'npc_3':
{
's':'1',
'c':'1',
'f':'npc-face1-blue',
'x':'708',
'y':'4780',
't':'npc_face1',
'cx':'4',
'cy':'36',
'm':'npc',
'actions':{
'message':'Quick scan running..No virus found, your PC is protected!|Good job, Mr.Afee!|Hey, who are you?|Just a regular bytestream walking around... I want to see the Internet, can you help me?|How can I know I can trust you?|I\'ve got money, would you like some?|Sure, thanks! Find Explorer and give him this ActiveX control, he knows.|Cool!',
'on':'key_3',
}
},
'npc_4':
{
's':'1',
'c':'1',
'f':'npc-face1-yellow',
'x':'5486',
'y':'2938',
't':'npc_face1',
'cx':'42',
'cy':'22',
'm':'npc',
'actions':{
'message':'..An error has occurred in the script on this page...|Hi! MrAfee told me you\'d like this!|..An ActiveX control! .. Is it signed? .. What do I care? .. What do you want for it?|Show me the way to the outside world!|..Oh,that\'s easy! .. Give me that control, first .. Mmm.. Nice! .. Promise not to use me to download another browser, right?|I do.|..Ok .. it won\'t be fast .. but take that header .. and show it to the router.',
'on':'key_4',
}
},
'npc_5':
{
's':'1',
'c':'1',
'f':'npc-face1-red',
'x':'3096',
'y':'5552',
't':'npc_face1',
'cx':'24',
'cy':'42',
'm':'npc',
'actions':{
'message':'Boarding pass, please?|You mean this?|Yup! Hey, it doesn\'t say where to go!|To the Internet, sir!|Duh! Could you be more specific?|I want to destroy all communications and take over the world, where should I start?|What do I know? Just say some random numbers.|91.. .. 22 .. 74 .. 12 .. 35|Got it! Sending you to 91.227.41.235! Good luck! Destroy them all!',
'on':'finnish_gam',
}
},
'enemy_1':
{
's':'1',
'c':'1',
'f':'enemy_0',
'x':'903.0303030303',
'y':'263.0303030303',
't':'enemy_face1',
'cx':'6',
'cy':'1',
'cx_to':'6',
'cy_to':'5',
'm':'enemy',
'actions':{
'behaviour':'stop',
}
},
'enemy_2':
{
's':'1',
'c':'1',
'f':'enemy_1',
'x':'1671.0303030303',
'y':'239.0303030303',
't':'enemy_face1',
'cx':'12',
'cy':'1',
'cx_to':'12',
'cy_to':'5',
'm':'enemy',
'actions':{
'behaviour':'stop',
}
},
'enemy_3':
{
's':'1',
'c':'1',
'f':'enemy_2',
'x':'115.0303030303',
'y':'2963.0303030303',
't':'enemy_face1',
'cx':'0',
'cy':'22',
'cx_to':'0',
'cy_to':'22',
'm':'enemy',
'actions':{
'behaviour':'stop',
}
},
'enemy_4':
{
's':'1',
'c':'1',
'f':'enemy_3',
'x':'1791.0303030303',
'y':'2175.0303030303',
't':'enemy_face1',
'cx':'13',
'cy':'16',
'cx_to':'13',
'cy_to':'16',
'm':'enemy',
'actions':{
'behaviour':'stop',
}
},
};
