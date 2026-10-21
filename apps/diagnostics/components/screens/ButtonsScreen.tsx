import { Component } from '@geastack/core'
import { diag } from '../../stores/DiagnosticsStore'
import './ButtonsScreen.css'
import './NotPresent.css'

export class ButtonsScreen extends Component {
  template() {
    return (
      <div class="screen-body buttons-screen">
        {diag.curState == 'live' ? (
          <div class="buttons-live">
            <span class="buttons-hint">PRESS ANY PHYSICAL BUTTON</span>
            {diag.btnCount > 0 ? (
              <div class="buttons-board">
                {diag.btnName0 != '' ? (
                  <div class={`button-cell ${diag.btnDown0 == 1 ? 'is-down' : ''}`}>
                    <span class="button-name">{diag.btnName0}</span>
                    <span class="button-meta">{diag.btnAlias0} - {diag.btnPresses0}x</span>
                  </div>
                ) : null}
                {diag.btnName1 != '' ? (
                  <div class={`button-cell ${diag.btnDown1 == 1 ? 'is-down' : ''}`}>
                    <span class="button-name">{diag.btnName1}</span>
                    <span class="button-meta">{diag.btnAlias1} - {diag.btnPresses1}x</span>
                  </div>
                ) : null}
                {diag.btnName2 != '' ? (
                  <div class={`button-cell ${diag.btnDown2 == 1 ? 'is-down' : ''}`}>
                    <span class="button-name">{diag.btnName2}</span>
                    <span class="button-meta">{diag.btnAlias2} - {diag.btnPresses2}x</span>
                  </div>
                ) : null}
                {diag.btnName3 != '' ? (
                  <div class={`button-cell ${diag.btnDown3 == 1 ? 'is-down' : ''}`}>
                    <span class="button-name">{diag.btnName3}</span>
                    <span class="button-meta">{diag.btnAlias3} - {diag.btnPresses3}x</span>
                  </div>
                ) : null}
              </div>
            ) : null}
            <div class="buttons-pins">
              {diag.pinDigital != '' ? <span class="buttons-pin">{diag.pinDigital}</span> : null}
              {diag.pinGpio != '' ? <span class="buttons-pin">{diag.pinGpio}</span> : null}
            </div>
            <div class="buttons-last">
              <span class="buttons-key">{diag.lastKey == 0 ? '-' : diag.lastKeyName}</span>
              <span class="buttons-code">{diag.lastKeyText}</span>
            </div>
            <span class="buttons-note">{diag.curDetail}</span>
          </div>
        ) : (
          <div class="not-present">
            <span class={`state-badge badge-${diag.curState}`}>{diag.curBadge}</span>
            <span class="not-present-msg">{diag.curMsg}</span>
            <span class="not-present-detail">{diag.curDetail}</span>
          </div>
        )}
      </div>
    )
  }
}
