<?php

namespace app\models;

use yii\db\ActiveRecord;

class Article extends ActiveRecord
{
	public static function tableName()
    {
		return '{{detail_test}}';
    }
	
}
