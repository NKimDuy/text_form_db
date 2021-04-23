<?php

namespace app\controllers;

use Yii;
use yii\helpers\ArrayHelper;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\TextForm;
use app\models\Detail;
use app\models\Chapter;
use app\models\Article;
use app\models\Images;


class SiteController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
		$images = Images::find()->all();
		
		$itemTextForm = ArrayHelper::map( TextForm::find()->where('ID_parent is null')->all(), 'ID', 'descript' );
		$textForm = new TextForm();
        return $this->render('index', [
			'textForm' => $textForm,
			'itemTextForm' => $itemTextForm,
			'images' => $images,
		]);
    }

    /**
     * Login action.
     *
     * @return Response|string
     */
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }

        $model->password = '';
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    /**
     * Logout action.
     *
     * @return Response
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return Response|string
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        }
        return $this->render('contact', [
            'model' => $model,
        ]);
    }

    /**
     * Displays about page.
     *
     * @return string
     */
    public function actionAbout()
    {
        return $this->render('about');
    }
	
	public function actionDetail($id)
	{
		$idDetail = \Yii::$app->request->get('id');
		
		$chapter = TextForm::find()
							->where(['ID_parent' => $idDetail])
							->asArray()
							->all();
			
		
		
		
		return $this->render('detail', [
			'chapter' => $chapter,
		]);
	}
	
	public function actionGetTextForm()
	{
		if(\Yii::$app->request->isAjax)
		{
			\Yii::$app->response->format = Response::FORMAT_JSON;
			$formText = TextForm::find()->all();
			return $formText;
			
		}
	}
	
	public function actionGetSpecifyDetail()
	{
		if(\Yii::$app->request->isAjax)
		{
			$detail = [];
			\Yii::$app->response->format = Response::FORMAT_JSON;
			$idTextForm = \Yii::$app->request->get('idTextForm');
			$detail = TextForm::find()
							->where(['ID_parent' => $idTextForm])
							->all();
			return $detail;
		}
	}
	
	

	
	public function actionGetArticle()
	{
		if(\Yii::$app->request->isAjax)
		{
			\Yii::$app->response->format = Response::FORMAT_JSON;
			$idChapter = \Yii::$app->request->get('id');
			$article = TextForm::find()
							->where(['ID_parent' => $idChapter])
							->all();
							
			
			return $article;
			
		}
	}
	
	
}
