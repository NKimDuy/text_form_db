<?php

namespace app\models;

use yii\db\ActiveRecord;

class Images extends ActiveRecord
{
	public static function tableName()
    {
		return '{{images}}';
    }
	
}
