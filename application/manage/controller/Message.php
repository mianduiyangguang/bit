<?php

/**
 * 平台消息管理
 */

namespace app\manage\controller;

use app\common\controller\Manage as ManageController;
use app\common\model\ManageRole;
use app\common\model\MessageCenter;
use app\common\model\Operation;
use app\common\model\SellerManage;
use app\common\model\SellerRole;
use app\common\model\SellerRoleOperationRel;
use app\common\model\User;
use app\common\model\Message as MessageModel;
use app\common\model\ManageRoleRel;
use Request;


class Message extends ManageController
{
    public function index()
    {
        if(Request::isAjax()){
            $messageModel = new MessageModel();
            return $messageModel->tableData(input('param.'));
        }else{
            $this->assign('sellerList',getSellerList());
            $messageCenterModel = new MessageCenter();
            $this->assign('sellerTpl',$messageCenterModel->seller_tpl);
            $this->assign('platformTpl',$messageCenterModel->platform_tpl);
            return $this->fetch('index');
        }
    }
    public function del()
    {
        if(!input('?param.id')){
            return error_code(10003);
        }
        $id = input('param.id');
        //$data['seller_id'] = $this->sellerId;
        $messageModel = new MessageModel();
        if($messageModel->where(['id'=>$id])->delete()){
            return [
                'status' => true,
                'data' => '',
                'msg' => '删除成功'
            ];
        }else{
            return [
                'status' => false,
                'data' => '',
                'msg' => '删除失败'
            ];
        }
    }

}