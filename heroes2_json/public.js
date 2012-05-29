//人物：｛名字，等级，人物头像，人物模型图片，当前生命，最大生命，当前经验，升级经验，攻击(基础，加成后)，防御（基础，加成后），暴击（基础，加成后），速度，当前衣服，当前武器,剩余技能点｝
//道具：｛图标，大图，名字，描述，生命加成，攻击加成，防御加成，暴击加成,速度加成｝
role_data={
	'001':{
		'name':'唐如',
		'lv':0,
		'avatar':'images/role/ava/ava_001.png',
		'model':'images/role/model/001_normal.png',
		'health':1000,
		'exp_current':12345,
		'exp_next':20000,
		'attack_base':15,
		'attack_current':30,
		'defend_base':3,
		'defend_current':17,
		'crit_base':0.01,
		'crit_current':0.02,
		'speed_moving_base':14,
		'speed_moving_current':15,
		'speed_attack_basic':12,
		'speed_attack_added':15,
		'weapon':'001',
		'clothes':'001',
		'skill_point':'2',
		'skill_list':['001','2','002','2','003','2']
	},
	'002':{
		'name':'祝离',
		'lv':0,
		'avatar':'images/role/ava/ava_002.png',
		'model':'images/role/model/002_normal.png',
		'health_current':0,
		'health_max':1000,
		'exp_current':12345,
		'exp_next':20000,
		'attack_base':15,
		'attack_current':30,
		'defend_base':3,
		'defend_current':17,
		'crit_base':0.01,
		'crit_current':0.02,
		'speed_base':14,
		'speed_current':15,
		'weapon':'001',
		'clothes':'001',
		'skill_point':3,
		'skill_list':['001','2','002','2','003','2']
	}
}

item_data={
		'weapon':{
			'001':{
				'name':'十八妹',
				'description':'虽然外表看起来像是一把菜刀，但是其主人坚称它是一柄剑，能够增加少得可怜的攻击和防御。',
				'icon':'images/weapon/icons/001.png',
				'model':'images/weapon/model/001.png',
				'health_addition':0,
				'attack_addition':10,
				'defend_addition':3,
				'crit_additoon':0,
				'speed_addition':2,
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
				'crit_additoon':0,
				'speed_addition':0, 
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
