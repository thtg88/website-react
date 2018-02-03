import React, { Component } from 'react';
import './InstagramModal.css';

class InstagramModal extends Component {
  render() {
    return (
      <div id="classic-cars" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="classic-cars-label">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 id="classic-cars-label" className="modal-title">Chasing Classic Cars</h4>
            </div>
            <div className="modal-body">
              <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-version="7" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'658px', padding:0, width:'calc(100% - 2px)'}}>
                <div style={{padding:'8px'}}>
                  <div style={{background:'#F8F8F8', lineHeight:0, marginTop:'40px', padding:'50.0% 0', textAlign:'center', width:'100%'}}>
                    <div style={{background:'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC)', display:'block', height:'44px', margin:'0 auto -44px', position:'relative', top:'-22px', width:'44px'}}></div>
                  </div>
                  <p style={{margin:'8px 0 0 0', padding:'0 4px'}}>
                    <a href="https://www.instagram.com/p/4bs5E3zh-c/" style={{color:'#000', fontFamily:'Arial,sans-serif', fontSize:'14px', fontStyle:'normal', fontWeight:'normal', lineHeight:'17px', textDecoration:'none', wordWrap:'break-word'}} target="_blank" rel="noopener noreferrer">Nice day to drive some Jags</a>
                  </p>
                  <p style={{color:'#c9c8cd', fontFamily:'Arial,sans-serif', fontSize:'14px', lineHeight:'17px', marginBottom:0, marginTop:'8px', overflow:'hidden', padding:'8px 0 7px', textAlign:'center', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>Un post condiviso da Marco Marassi (@thtg88) in data: <time style={{fontFamily:'Arial,sans-serif', fontSize:'14px', lineHeight:'17px'}} dateTime="2015-06-27T12:36:51+00:00">27 Giu 2015 alle ore 05:36 PDT</time></p>
                </div>
              </blockquote>
              <script async defer src="//platform.instagram.com/en_US/embeds.js"></script>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default InstagramModal;
