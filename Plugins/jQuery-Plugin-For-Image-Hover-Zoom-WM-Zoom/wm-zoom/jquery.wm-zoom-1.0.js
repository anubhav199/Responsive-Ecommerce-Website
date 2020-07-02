/*!
 * jquery.wm-zoom - v 1.0
 * desenvolvido por Welison Menezes
 * email : welisonmenezes@gmail.com
 * 
 *
 * Copyright 2014 Welison Menezes
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License 
 */

;(function ($) 
{
    'use strict';
    $.fn.extend({
        WMZoom: function (options) {
            /**
             *  default configurations
             */
            var defaults = {
                config : {
                    stageW : 500,
                    stageH : 400,
                    inner  : false,
                    position : 'right', // [top, right, bottom, left]
                    margin : 10
                }
            },

            /**
             *  merge default configurations with custom user configurations
             */
            options = $.extend(true, defaults, options);

            return this.each(function () 
            {
                // elements
                var $el     = $(this),
                    $box    = $el.find('.wm-zoom-box'),
                    $img    = $box.find('img'),
                    srcLoader = $img.attr('data-loader-src'),
                    $lens = $('<div />').addClass('wm-zoom-lens'),
                    $hightBox = $('<div />').addClass('wm-zoom-hight'),
                    $loader = $('<img />').addClass('wm-zoom-loader').attr('src', srcLoader),
                    $hightImg;

                    $box.append($lens);
                    $hightBox.html($loader);
                    $box.prepend($hightBox);

                // box default image
                var boxWidth,
                    boxHeight,
                    pOffset;

                // ajax statuses
                var wmAjaxInit,
                    wmAjaxEnd,
                    wmOpened;

                // loader dimensions e positions
                var loaderW,
                    loaderH,
                    halfLoaderW,
                    halfLoaderH;

                // dimensions box hight image and hight image
                var hightBoxWidth,
                    hightBoxHeight,
                    hightImgWidth,
                    hightImgHeight;

                // dinamic dimensions lens
                var lensWidth,
                    lensHeight,
                    halfLensW,
                    halfLensH;

                // relative pointer position
                var xPosition,
                    yPosition;

                // lens position
                var lensLeft,
                    lensTop;

                // box hight image position
                var dWidth,
                    imgLeft,
                    dHeight,
                    imgTop;

                var stageW,
                    stageH;

                var setBoxesSize = function()
                {
                    // get dimensions to div box default image and offset element
                    boxWidth    = $img.width();
                    boxHeight   = $img.height();
                    pOffset     = $el.offset();

                    if(options.config.inner === true)
                    {
                        stageW = boxWidth;
                        stageH = boxHeight;
                    }
                    else
                    {
                        stageW = options.config.stageW;
                        stageH = options.config.stageH;
                    }

                    // size div to default image
                    $box.css({
                        'height' : boxHeight+'px',
                        'width'  : boxWidth+'px'
                    });

                    // size div to hight image
                    $hightBox.css({
                        'height' : stageH+'px',
                        'width'  : stageW+'px'
                    });

                    if(options.config.inner === true)
                    {
                        $hightBox.css({
                            'top' : '0px',
                            'left' : '0px'
                        });
                    }
                    else
                    {
                        // right
                        if(options.config.position==='right')
                        {
                            $hightBox.css({
                                'top' : '0px',
                                'left' : (boxWidth+options.config.margin)+'px'
                            });
                        }

                        // bottom
                        if(options.config.position==='bottom')
                        {
                            $hightBox.css({
                                'top' : (boxHeight+options.config.margin)+'px',
                                'left' : '0px'
                            });
                        }
                        
                        // top
                        if(options.config.position==='top')
                        {
                            $hightBox.css({
                                'top' : '-'+(stageH+options.config.margin)+'px',
                                'left' : '0px'
                            });
                        }

                        // left
                        if(options.config.position==='left')
                        {
                            $hightBox.css({
                                'top' : '0px',
                                'left' : '-'+(stageW+options.config.margin)+'px'
                            });
                        }
                    }
                };

                var setLoaderSize = function(){
                    // show lens and box hight image
                    if(options.config.inner !== true)
                        $lens.stop().fadeIn(300);
                    
                    $hightBox.stop().fadeIn(300);

                    loaderW = $loader.width();
                    loaderH = $loader.height();
                    halfLoaderW = (stageW/2)-(loaderW/2);
                    halfLoaderH = (stageH/2)-(loaderH/2);

                    $loader.css({
                        'top' : halfLoaderH+'px',
                        'left' : halfLoaderW+'px'
                    });

                    wmOpened = true;
                };

                var getImageAjax = function()
                {
                    if($hightImg.length < 1)
                    {
                        var url = $img.attr('data-hight-src'); 
                        // if not isset ajax request then init one
                        if(wmAjaxInit==false){

                            wmAjaxInit = true;
                            wmAjaxEnd = false;
                            var i = new Image();
                            
                            // get image
                            $(i).addClass('wm-zoom-hight-img').attr('src', url)
                            .load(function() {  
                                $hightImg.remove();
                                $hightBox.append(i); 
                                wmAjaxEnd = true;
                            });
                        }
                    }
                    else
                    {
                        wmAjaxInit = true;
                        wmAjaxEnd = true;
                    }
                };

                var makeZoom = function()
                {   
                    setBoxesSize();

                    // ajax status
                    wmAjaxInit = false;
                    wmAjaxEnd = false;
                    wmOpened = false;

                    $box.mouseenter(function(e)
                    {
                        setLoaderSize();

                    }).mousemove(function(e)
                    {
                        var $t = $(this);
                        $hightImg = $hightBox.find('img.wm-zoom-hight-img');

                        if(wmOpened===false){ setLoaderSize(); }

                        getImageAjax();

                        // to continue ajax statuses must be true 
                        if(wmAjaxEnd!=true && wmAjaxInit!=true) return false;

                        // get dimensions box hight image and hight image
                        hightBoxWidth = $hightBox.width(),
                        hightBoxHeight = $hightBox.height(),
                        hightImgWidth = $hightImg.width(),
                        hightImgHeight = $hightImg.height();

                        // get dinamic dimensions lens
                        lensWidth =  (stageW*boxWidth) / hightImgWidth,
                        lensHeight =  (stageH*boxHeight) / hightImgHeight,
                        halfLensW   = lensWidth/2,
                        halfLensH   = lensHeight/2;

                        // set limits to lesn
                        if(lensHeight>boxHeight) lensHeight = boxHeight;
                        if(lensWidth>boxWidth) lensWidth = boxWidth;

                        // set dimensions lens
                        $lens.css({
                            'width' : lensWidth,
                            'height' : lensHeight
                        });

                        // get relative pointer position
                        xPosition = (e.pageX - pOffset.left),
                        yPosition = (e.pageY - pOffset.top);

                        if(xPosition>boxWidth||xPosition<0||yPosition>boxHeight||yPosition<0)
                        {
                            $lens.hide();
                            $hightBox.hide();
                        }
                        
                        /* -----------------------------
                         *
                         *  dinamic lens position
                         *
                         * ----------------------------*/
                        // dinamic  position left
                        lensLeft = (xPosition-halfLensW);
                        if(lensLeft<0)
                        {
                            lensLeft = 0;
                        }
                        else if(lensLeft>(boxWidth-lensWidth))
                        {
                            lensLeft = (boxWidth-lensWidth);
                        }

                        // dinamic position top
                        lensTop = (yPosition-halfLensH);
                        if(lensTop<0)
                        {
                            lensTop = 0;
                        }
                        else if(lensTop>(boxHeight-lensHeight))
                        {
                            lensTop = (boxHeight-lensHeight);
                        }

                        // set dinamic position
                        $lens.css({
                            'left' : lensLeft+'px',
                            'top'  : lensTop+'px'
                        });

                        /* -----------------------------
                         *
                         *  dinamic hight img position
                         *
                         * ----------------------------*/
                        // dinamic position left
                        dWidth = (hightImgWidth-(hightBoxWidth/2))/(boxWidth-halfLensW);
                        imgLeft = Math.ceil((dWidth*lensLeft));
                        if(imgLeft>(hightImgWidth-(hightBoxWidth)))
                        {
                            imgLeft = (hightImgWidth-(hightBoxWidth));
                        }

                        // dinamic position top
                        dHeight = (hightImgHeight-(hightBoxHeight/2))/(boxHeight-halfLensH);
                        imgTop = Math.ceil((dHeight*lensTop));
                        if(imgTop>(hightImgHeight-(hightBoxHeight)))
                        {
                            imgTop = (hightImgHeight-(hightBoxHeight));
                        }

                        // set dinamic position
                        $hightImg.css({
                            'left' : '-'+imgLeft+'px',
                            'top'  : '-'+imgTop+'px'
                        });

                    }).mouseleave(function()
                    {
                        $lens.stop().fadeOut(300);
                        $hightBox.stop().fadeOut(300);
                        wmOpened = false;
                    });
                };
                
                $(window).load(function(){
                    setTimeout(function(){
                        makeZoom();
                    },25);
                });
                
            });
        }
    });
})(jQuery);