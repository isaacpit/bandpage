import React, { Component } from 'react';

import "./TimelineHorizontal.css";

// credit: https://codepen.io/wdmg/pen/ZWmwNM

export default class TimelineHorizontal extends Component {
  constructor(props) {
  super(props);
  
  }

  render() {
  return (
    <div className="container">
        <div className="row">
        <div className="col-md-12">
            <div className="page-header">
            <h1>Horizontal timeline</h1>
            </div>
            <div style={{display:"inline-block", width:"100%", overflowY:"auto"}}>
            <ul className="timeline timeline-horizontal">
            <li className="timeline-item">
                <div className="timeline-badge primary"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 1</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis faiz elementum girarzis, nisi eros gostis.</p>
                </div>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-badge success"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 2</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis faiz elementum girarzis, nisi eros gostis.</p>
                </div>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-badge info"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 3</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipisci. Mé faiz elementum girarzis, nisi eros gostis.</p>
                </div>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-badge danger"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 4</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.</p>
                </div>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-badge warning"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 5</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.</p>
                </div>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 6</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.</p>
                </div>
                </div>
            </li>
            </ul>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
            <div className="page-header">
            <h1>Timeline</h1>
            </div>
            <ul className="timeline">
            <li className="timeline-item">
                <div className="timeline-badge"><i className="glyphicon glyphicon-off"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 1</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                </div>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 2</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros gostis.</p>
                </div>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 3</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                    
                </div>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="timeline-title">Mussum ipsum cacilds 4</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                </div>
                </div>
            </li>
            </ul>
        </div>
        </div>
    </div>
  )
  }
}