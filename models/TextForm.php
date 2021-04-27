<?php

namespace app\models;

use yii\db\ActiveRecord;

class TextForm extends ActiveRecord
{
	public static function tableName()
    {
		return '{{test}}';
    }
	
		public function getDetailArticle()
		{
			return $this->hasOne(Article::className(), ['ID' => 'ID']);
		}
	
}
