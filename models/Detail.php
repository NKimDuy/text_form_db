<?php

namespace app\models;

use yii\db\ActiveRecord;

class Detail extends ActiveRecord
{
	public static function tableName()
    {
		return '{{detail}}';
    }
	
}
