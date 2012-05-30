//用于通信的
role_data={
	'001':{
		'name':'唐如',//名字
		'type':'001',//类型
		'lv':0,//等级
		'avatar':'images/role/ava/ava_001.png',//头像
		'model':'images/role/model/001_normal.png',//裸模
		'health':1000,//生命
		'exp_current':12345,//当前经验值
		'exp_next':20000,//升级经验值
		'attack':15,//攻击
		'defend':3,//防御
		'crit':5,//暴击
		'miss':5,//闪避
		'weapon':'001',//武器编号
		'clothes':'001',//衣服编号
		'skill_point':'2',
		'skill_list':['001','2','002','2','003','2']
	},
	'002':{
		'name':'祝离',//名字
		'type':'002',//类型
		'lv':0,//等级
		'avatar':'images/role/ava/ava_001.png',//头像
		'model':'images/role/model/001_normal.png',//裸模
		'health':1000,//生命
		'exp_current':12345,//当前经验值
		'exp_next':20000,//升级经验值
		'attack':15,//攻击
		'defend':3,//防御
		'crit':5,//暴击
		'miss':5,//闪避
		'weapon':'001',//武器编号
		'clothes':'001',//衣服编号
		//技能部待讨论
		'skill_point':'2',
		'skill_list':['001','2','002','2','003','2']
	},
	'003':{
		'name':'碧青',//名字
		'lv':0,//等级
		'avatar':'images/role/ava/ava_001.png',//头像
		'model':'images/role/model/001_normal.png',//裸模
		'health':1000,//生命
		'exp_current':12345,//当前经验值
		'exp_next':20000,//升级经验值
		'attack':15,//攻击
		'defend':3,//防御
		'crit':5,//暴击
		'miss':5,//闪避
		'weapon':'001',//武器编号
		'clothes':'001',//衣服编号
		'skill_point':'2',
		'skill_list':['001','2','002','2','003','2']
	},
}

item_data={
		'weapon':{
			'001':{
				'name':'毛笔',//名称
				'description':'路边最普通不过的十文钱一支的毛笔',//描述
				'icon':'images/weapon/icons/001.png',//图标路径
				'model':'images/weapon/model/001.png',//模型
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'for':'001',//适用角色
				'open':true
			},
			'002':{
				
			},
			'003':{
				'name':'十八妹',
				'description':'虽然外表看起来像是一把菜刀，但是其主人坚称它是一柄剑，能够增加一定程度的攻击和防御。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'for':'002'//适用角色
			},
			'004':{
					
			}
		},

		'clothes':{
			'001':{
				'name':'粗布衣',
				'description':'旧衣店出售的破旧衣服，上面还打了几个补丁。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_addition':0,
				'speed_addition':0, 
				'for':'001'//适用角色
			}
		}
}

//技能：
skill_data={
	'001':{
		'name':'枯木逢春',
		'description':'',
		'type':'',
		'icon':'',
		'level_limit':['0','1','2','3'],
		'cd':3,
		'data':{
			'blood_addition':'',
		}
	},
	'002':{}
}

console.log(skill_data['001']['name']);
