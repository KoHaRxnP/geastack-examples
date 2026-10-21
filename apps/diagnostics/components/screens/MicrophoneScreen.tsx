import { Component } from '@geastack/core'
import { diag } from '../../stores/DiagnosticsStore'
import './NotPresent.css'
import './SpeakerScreen.css'

export class MicrophoneScreen extends Component {
  template() {
    return (
      <div class="screen-body microphone-screen">
        {diag.curState == 'live' ? (
          <div class="microphone-live">
            <div class="kv-row"><span class="kv-k">INPUT</span><span class="kv-v">{diag.curDetail}</span></div>
            <div class="value-big">MIC READY</div>
            <div class="kv-row"><span class="kv-k">CAPTURE PATH</span><span class="kv-v">codec ADC (device)</span></div>
            <div class="kv-row"><span class="kv-k">TEST</span><span class="kv-v">{diag.micStatus}</span></div>
            <div class="tone-grid">
              <div id="mic.record" class="tone-btn mic-record-btn" onClick={() => diag.recordMic()}>
                {diag.micRecording == 0 ? 'RECORD 2s' : diag.micRecording != 1 ? 'OPENING...' : 'RECORDING...'}
              </div>
            </div>
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
