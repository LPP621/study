<?php
/**
 * Created by PhpStorm.
 * User: bryzf
 * Date: 2019/3/8
 * Time: 下午5:43
 */
namespace app\evaluation\controller;

use think\Controller;
use app\common\service\Evaluation;
use thirdpart\extlib\tool\Logger;
use zkbr\common\BaseResult;

class EvaluationController extends Controller
{
    public function index()
    {
        $data=['out_trade_no'=>'45','user_id'=>'45'];
        $res=Evaluation::instance()->evaluationIndex($data);
        $resInfo=$res->getData();
        if ($resInfo['evaluation_status']==='no') {
            $this->assign('product_list',$resInfo['product_list']);
            $this->assign('out_trade_no',$data['out_trade_no']);
            $this->assign('user_id',$data['user_id']);
            return $this->fetch();
        }
        return view();
    }
    public function sendEvaluation()
    {
        // $data = [
        //     'start_number' => 2,
        //     'out_trade_no' => 'DZX20190126162312874663',
        //     'evaluation_content' => '不错',
        //     'user_id' => 'ZKBR2019012616212915484908894495'
        // ];
        // $data['product_evaluation_list'] = [['product_id' => 1, 'like_status' => 1], ['product_id' => 2, 'like_status' => 1]];
        $data=input('post.');
        // 检查参数
        $res = $this->checkParmas($data);
        if (!$res->isSuccess()) {
            dump($res->getData());
            return zkbrReturn(0, $res->getMessage(), '');
        }
        // 添加评价记录
        $dealRes = Evaluation::instance()->evaluationDeal($data);
        dump($dealRes);
        if ($dealRes->isSuccess()) {
            return zkbrReturn(0, $dealRes->getMessage(), '');
        }
        return zkbrReturn(1, $dealRes->getMessage(), '');
    }
    private function checkParmas($data)
    {
        $result = $this->validate($data, 'Evaluation.sendEvaluation');
        if ($result !== true) {
            Logger::model('evaluation')->info($result, 'checkParmas验证参数错误');
            return BaseResult::instance(['FAIL', $result]);
        }
        return BaseResult::instance()->setData([]);
    }
    public function successful_submission()
    {
        return view();
    }
    public function submitted()
    {
        return view();
    }
}
