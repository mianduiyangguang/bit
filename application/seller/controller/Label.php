<?php

namespace app\seller\controller;

use app\common\controller\Seller;
use app\common\model\Label as labelModel;
use Request;


class Label extends Seller
{
    /**
     * 通用设置标签方法
     * @return mixed
     */
    public function setLabel()
    {
        $ids = input('ids/a', []);
        $model = input('model', '');//要设置的模型
        $total_item = count($ids);

        $this->assign('total_item', $total_item);
        $this->assign('model', $model);
        //已存在标签
        $labelModel = new labelModel();

        $labels = $labelModel->getAllLabel($this->sellerId);
        $this->assign('labels', $labels);

        $this->view->engine->layout(false);
        $content = $this->fetch('setLabel');
        return [
            'status'=>true,
            'data'=>$content,
            'msg'=>'获取成功',
        ];
    }

    public function doSetLabel()
    {
        if (Request::isPost()) {
            $data = input('param.');
            $data['seller_id'] = $this->sellerId;
            $labelModel = new labelModel();
            return $labelModel->addData($data);
        }
    }

    /**
     * 删除标签
     * @return array
     */
    public function delLabel(){
        $ids = input('ids/a', []);
        $model = input('model', '');//要设置的模型
        $total_item = count($ids);

        $this->assign('total_item', $total_item);
        $this->assign('model', $model);
        //已存在标签
        $labelModel = new labelModel();

        $labels = $labelModel->getAllSelectLabel($ids,$model,$this->sellerId);
        $this->assign('labels', json_encode($labels,320));

        $this->view->engine->layout(false);
        $content = $this->fetch('delLabel');
        return [
            'status'=>true,
            'data'=>$content,
            'msg'=>'获取成功',
        ];
    }

    public function doDelLabel(){
        if (Request::isPost()) {
            $data = input('param.');
            $data['label'] = input('param.label/a',[]);
            $data['seller_id'] = $this->sellerId;
            $labelModel = new labelModel();
            return $labelModel->delData($data);
        }
    }

}