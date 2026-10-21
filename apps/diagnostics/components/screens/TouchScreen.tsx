import { Component } from '@geastack/core'
import { diag } from '../../stores/DiagnosticsStore'
import './TouchScreen.css'
import './NotPresent.css'

// Readouts only; the contacts land on TouchPad, a full-screen layer ScreenHost
// mounts over the scroll region, so the marker sits under the finger.
export class TouchScreen extends Component {
  template() {
    return (
      <div class="screen-body touch-screen">
        <div class="kv-row"><span class="kv-k">CONTACT</span><span class="kv-v">{diag.touching == 1 ? 'TOUCHING' : 'IDLE'}</span></div>
        <div class="kv-row"><span class="kv-k">X / Y</span><span class="kv-v">{diag.touchX} , {diag.touchY}</span></div>
        <div class="kv-row"><span class="kv-k">DOWNS / MOVES</span><span class="kv-v">{diag.touchDowns} / {diag.touchMoves}</span></div>
        {diag.touchDowns == 0 ? <span class="touch-hint">TOUCH ANYWHERE</span> : null}
      </div>
    )
  }
}

export class TouchPad extends Component {
  template() {
    return (
      <div
        class="touch-pad"
        onTouchStart={e => diag.touchStart(e.clientX, e.clientY)}
        onTouchMove={e => diag.touchMove(e.clientX, e.clientY)}
        onTouchEnd={e => diag.touchEnd(e.clientX, e.clientY)}
      >
        {diag.touching == 1 ? (
          <span class="touch-dot" style={{ left: diag.touchX, top: diag.touchY }}></span>
        ) : null}
      </div>
    )
  }
}
