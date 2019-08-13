$('#swiper').sliderImg({ //拿到id,调用sliderImg插件，插件传的参数，第一个是传的图片，字段是img，Img数据结构是一个数组，
    image: ['../image/pic1.jpg', '../image/pic2.jpg', '../image/pic3.jpg'],
    interVal: 3000
});


var index;
$('.cate_menu_item').hover(function () {
    $('.JS_popCtn').css('display', 'block'); //大的区域以显示，鼠标移入
    index = $(this).attr('data-index');
    $('#cate_item' + index).css('display', 'block');
    // console.log(index);
}, function () {
    $('.JS_popCtn').css('display', 'none'); //鼠标移走，大的区域消失
    $('#cate_item' + index).css('display', 'none');
});
$('.JS_popCtn').on('mouseover', function () {
    $(this).css('display', 'block');

    $('#cate_item' + index).css('display', 'block');
    // console.log(index);
}).on('mouseout', function () {
    $('.JS_popCtn').css('display', 'none');
    $('#cate_item' + index).css('display', 'none');
})


//右侧滑动动画
$('.services_entry .row1').hover(function () {
    $('.services_entry').slideUp(); //向上划出
    $('.services_content').slideDown(); //向上划入字
    $('.services_content .content').css('display', 'none');

    //谁触发了哪一个鼠标移入事件
    console.log($(this).attr('id'))
    var id = $(this).attr('id');
    $('.nowActive').removeClass('nowActive');
    $('.' + id + '_tab').addClass('nowActive');

    $('.' + id + '_content').show();
    $('.close').show();

});

$('.services_content .header span').hover(function () {
    $('.nowActive').removeClass('nowActive');
    $(this).addClass('nowActive');

    // $('.' + id + '_content').show();
    $('.' + $(this).attr('data') + '_content').show().siblings('.content').hide();
});

$('.services_content .close').on('click', function () {
    $(this).hide();
    $('.services_entry').slideDown();
    $('.services_content').slideUp();
    $('.services_content .content').hide();
})


$('#location').areaList({
    items: [{
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '河北',
        href: '#'
    }],
    //每一行显示城市数量
    rowNum: 5,
   //默认显示值
    nowItem: '北京',
    //显示图标图片
    nowItemImg: '../image/local.jpg'
});


//导航条下拉列表插件
//纵向展示y
$('#myJd').dropList({
    direction:'y',
    colNum:2,
    menuList: [{
        title: '',
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        },
        ],
    }]
});
//x 横向展示
$('#nav').dropList({
    // 下拉列表里面每一块的排布是横向横向（y）, 纵向（x）
    direction: 'x',
    // 下拉列表内的内容
    menuList: [{
        // 每块的标题
        title: '特色',
        // 每块的宽度
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
        // 每块每行的选项列数
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }]
});