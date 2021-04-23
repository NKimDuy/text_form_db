<?php

namespace app\models;

use yii\db\ActiveRecord;

class TextForm extends ActiveRecord
{
	public static function tableName()
    {
		return '{{test}}';
    }
	
}
