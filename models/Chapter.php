<?php

namespace app\models;

use yii\db\ActiveRecord;

class Chapter extends ActiveRecord
{
	public static function tableName()
    {
		return '{{chapter}}';
    }
	
}
