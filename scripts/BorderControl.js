import { libWrapper } from './shim.js';
let BCC;
Hooks.once('ready', async function() {
  game.settings.register('Border-Control', 'removeBorders', {
    name: game.i18n.localize('Border-Control.setting.removeBorders.name'),
    hint: game.i18n.localize('Border-Control.setting.removeBorders.hint'),
    scope: 'world',
    type: String,
    choices: {
      0: 'None',
      1: 'Non Owned',
      2: 'All',
    },
    default: '0',
    config: true,
  });

  game.settings.register('Border-Control', 'healthGradient', {
    name: game.i18n.localize('Border-Control.setting.healthGradient.name'),
    hint: game.i18n.localize('Border-Control.setting.healthGradient.hint'),
    scope: 'world',
    type: Boolean,
    default: false,
    config: true,
  });
  game.settings.register('Border-Control', 'tempHPgradient', {
    name: game.i18n.localize('Border-Control.setting.tempHPgradient.name'),
    hint: game.i18n.localize('Border-Control.setting.tempHPgradient.hint'),
    scope: 'world',
    type: Boolean,
    default: false,
    config: true,
  });
  game.settings.register('Border-Control', 'healthGradientA', {
    name: game.i18n.localize('Border-Control.setting.healthGradientA.name'),
    hint: game.i18n.localize('Border-Control.setting.healthGradientA.hint'),
    scope: 'world',
    type: String,
    default: '#1b9421',
    config: true,
  });
  game.settings.register('Border-Control', 'healthGradientB', {
    name: game.i18n.localize('Border-Control.setting.healthGradientB.name'),
    hint: game.i18n.localize('Border-Control.setting.healthGradientB.hint'),
    scope: 'world',
    type: String,
    default: '#c9240a',
    config: true,
  });

  game.settings.register('Border-Control', 'healthGradientC', {
    name: game.i18n.localize('Border-Control.setting.healthGradientC.name'),
    hint: game.i18n.localize('Border-Control.setting.healthGradientC.hint'),
    scope: 'world',
    type: String,
    default: '#22e3dd',
    config: true,
  });

  game.settings.register('Border-Control', 'stepLevel', {
    name: game.i18n.localize('Border-Control.setting.stepLevel.name'),
    hint: game.i18n.localize('Border-Control.setting.stepLevel.hint'),
    scope: 'world',
    type: Number,
    default: 10,
    config: true,
  });

  game.settings.register('Border-Control', 'borderWidth', {
    name: game.i18n.localize('Border-Control.setting.borderWidth.name'),
    hint: game.i18n.localize('Border-Control.setting.borderWidth.hint'),
    scope: 'client',
    type: Number,
    default: 4,
    config: true,
  });
  game.settings.register('Border-Control', 'borderOffset', {
    name: game.i18n.localize('Border-Control.setting.borderOffset.name'),
    hint: game.i18n.localize('Border-Control.setting.borderOffset.hint'),
    scope: 'client',
    type: Number,
    default: 0,
    config: true,
  });
  game.settings.register('Border-Control', 'targetSize', {
    name: game.i18n.localize('Border-Control.setting.targetSize.name'),
    hint: game.i18n.localize('Border-Control.setting.targetSize.hint'),
    scope: 'client',
    type: Number,
    default: 1,
    config: true,
  });
  game.settings.register('Border-Control', 'internatTarget', {
    name: game.i18n.localize('Border-Control.setting.internatTarget.name'),
    hint: game.i18n.localize('Border-Control.setting.internatTarget.hint'),
    scope: 'client',
    type: Boolean,
    default: false,
    config: true,
  });
  game.settings.register('Border-Control', 'circleBorders', {
    name: game.i18n.localize('Border-Control.setting.circleBorders.name'),
    hint: game.i18n.localize('Border-Control.setting.circleBorders.hint'),
    scope: 'client',
    type: Boolean,
    default: false,
    config: true,
  });
  game.settings.register('Border-Control', 'enableHud', {
    name: game.i18n.localize('Border-Control.setting.enableHud.name'),
    hint: game.i18n.localize('Border-Control.setting.enableHud.hint'),
    scope: 'world',
    type: Boolean,
    default: true,
    config: true,
  });
  game.settings.register('Border-Control', 'hudPos', {
    name: game.i18n.localize('Border-Control.setting.hudPos.name'),
    hint: game.i18n.localize('Border-Control.setting.hudPos.hint'),
    scope: 'world',
    type: String,
    default: '.right',
    choices: {
      '.right': 'Right',
      '.left': 'Left',
    },
    config: true,
  });

  game.settings.register('Border-Control', 'enableCustomNameplate', {
    name: game.i18n.localize('Border-Control.setting.customNameplate.name'),
    hint: game.i18n.localize('Border-Control.setting.customNameplate.hint'),
    scope: 'world',
    type: Boolean,
    default: true,
    config: true,
  });

  game.settings.register('Border-Control', 'circularNameplate', {
    name: game.i18n.localize('Border-Control.setting.circularNameplate.name'),
    hint: game.i18n.localize('Border-Control.setting.circularNameplate.hint'),
    scope: 'world',
    type: Boolean,
    default: false,
    config: true,
  });
  game.settings.register('Border-Control', 'circularNameplateRadius', {
    name: game.i18n.localize('Border-Control.setting.circularNameplateRadius.name'),
    hint: game.i18n.localize('Border-Control.setting.circularNameplateRadius.hint'),
    scope: 'world',
    type: Number,
    default: 0,
    config: true,
  });
  game.settings.register('Border-Control', 'nameplateOffset', {
    name: game.i18n.localize('Border-Control.setting.nameplateOffset.name'),
    hint: game.i18n.localize('Border-Control.setting.nameplateOffset.hint'),
    scope: 'world',
    type: Number,
    default: 0,
    config: true,
  });

  game.settings.register('Border-Control', 'plateFont', {
    name: game.i18n.localize('Border-Control.setting.plateFont.name'),
    hint: game.i18n.localize('Border-Control.setting.plateFont.hint'),
    scope: 'world',
    type: String,
    choices: {
      arial: 'Arial',
      'arial black': 'Arial Black',
      'comic sans ms': 'Comic Sans MS',
      'courier new': 'Courier New',
      georgia: 'Georgia',
      helvetica: 'Helvetica',
      impact: 'Impact',
      signika: 'Signika',
      tahoma: 'Tahoma',
      'times new roman': 'Times New Roman',
      verdana: 'Verdana',
    },
    default: 'signika',
    config: true,
  });
  game.settings.register('Border-Control', 'sizeMultiplier', {
    name: game.i18n.localize('Border-Control.setting.sizeMultiplier.name'),
    hint: game.i18n.localize('Border-Control.setting.sizeMultiplier.hint'),
    scope: 'world',
    type: Number,
    default: 1,
    config: true,
  });
  game.settings.register('Border-Control', 'plateConsistency', {
    name: game.i18n.localize('Border-Control.setting.plateConsistency.name'),
    hint: game.i18n.localize('Border-Control.setting.plateConsistency.hint'),
    scope: 'world',
    type: Boolean,
    default: false,
    config: true,
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'controlledColor', {
    name: game.i18n.localize('Border-Control.setting.controlledColor.name'),
    hint: game.i18n.localize('Border-Control.setting.controlledColor.hint'),
    label: game.i18n.localize('Border-Control.setting.controlledColor.name'),
    restricted: false,
    defaultColor: '#FF9829',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'controlledColorEx', {
    name: game.i18n.localize('Border-Control.setting.controlledColorEx.name'),
    hint: game.i18n.localize('Border-Control.setting.controlledColorEx.hint'),
    label: game.i18n.localize('Border-Control.setting.controlledColorEx.name'),
    restricted: false,
    defaultColor: '#000000',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'hostileColor', {
    name: game.i18n.localize('Border-Control.setting.hostileColor.name'),
    hint: game.i18n.localize('Border-Control.setting.hostileColor.hint'),
    label: game.i18n.localize('Border-Control.setting.hostileColor.name'),
    restricted: false,
    defaultColor: '#E72124',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'hostileColorEx', {
    name: game.i18n.localize('Border-Control.setting.hostileColorEx.name'),
    hint: game.i18n.localize('Border-Control.setting.hostileColorEx.hint'),
    label: game.i18n.localize('Border-Control.setting.hostileColorEx.name'),
    restricted: false,
    defaultColor: '#000000',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'friendlyColor', {
    name: game.i18n.localize('Border-Control.setting.friendlyColor.name'),
    hint: game.i18n.localize('Border-Control.setting.friendlyColor.hint'),
    label: game.i18n.localize('Border-Control.setting.friendlyColor.name'),
    restricted: false,
    defaultColor: '#43DFDF',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'friendlyColorEx', {
    name: game.i18n.localize('Border-Control.setting.friendlyColorEx.name'),
    hint: game.i18n.localize('Border-Control.setting.friendlyColorEx.hint'),
    label: game.i18n.localize('Border-Control.setting.friendlyColorEx.name'),
    restricted: false,
    defaultColor: '#000000',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'neutralColor', {
    name: game.i18n.localize('Border-Control.setting.neutralColor.name'),
    hint: game.i18n.localize('Border-Control.setting.neutralColor.hint'),
    label: game.i18n.localize('Border-Control.setting.neutralColor.name'),
    restricted: false,
    defaultColor: '#F1D836',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'neutralColorEx', {
    name: game.i18n.localize('Border-Control.setting.neutralColorEx.name'),
    hint: game.i18n.localize('Border-Control.setting.neutralColorEx.hint'),
    label: game.i18n.localize('Border-Control.setting.neutralColorEx.name'),
    restricted: false,
    defaultColor: '#000000',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'partyColor', {
    name: game.i18n.localize('Border-Control.setting.partyColor.name'),
    hint: game.i18n.localize('Border-Control.setting.partyColor.hint'),
    label: game.i18n.localize('Border-Control.setting.partyColor.name'),
    restricted: false,
    defaultColor: '#33BC4E',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'partyColorEx', {
    name: game.i18n.localize('Border-Control.setting.partyColorEx.name'),
    hint: game.i18n.localize('Border-Control.setting.partyColorEx.hint'),
    label: game.i18n.localize('Border-Control.setting.partyColorEx.name'),
    restricted: false,
    defaultColor: '#000000',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'targetColor', {
    name: game.i18n.localize('Border-Control.setting.targetColor.name'),
    hint: game.i18n.localize('Border-Control.setting.targetColor.hint'),
    label: game.i18n.localize('Border-Control.setting.targetColor.name'),
    restricted: false,
    defaultColor: '#FF9829',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  new window.Ardittristan.ColorSetting('Border-Control', 'targetColorEx', {
    name: game.i18n.localize('Border-Control.setting.targetColorEx.name'),
    hint: game.i18n.localize('Border-Control.setting.targetColorEx.hint'),
    label: game.i18n.localize('Border-Control.setting.targetColorEx.name'),
    restricted: false,
    defaultColor: '#000000',
    onChange: function() {
      // TODO UPDATE COLOR OF THE BORDER ON CANVAS
    },
  });

  game.settings.register('Border-Control', 'disableRefreshTarget', {
    name: game.i18n.localize('Border-Control.setting.disableRefreshTarget.name'),
    hint: game.i18n.localize('Border-Control.setting.disableRefreshTarget.hint'),
    scope: 'world',
    type: Boolean,
    default: false,
    config: true,
  });

  libWrapper.register('Border-Control', 'Token.prototype._refreshBorder', BorderFrame.newBorder, 'OVERRIDE');
  libWrapper.register('Border-Control', 'Token.prototype._getBorderColor', BorderFrame.newBorderColor, 'OVERRIDE');
  if (!game.settings.get('Border-Control', 'disableRefreshTarget')) {
    libWrapper.register('Border-Control', 'Token.prototype._refreshTarget', BorderFrame.newTarget, 'OVERRIDE');
  }
  if (game.settings.get('Border-Control', 'enableCustomNameplate')) {
    libWrapper.register('Border-Control', 'Token.prototype._drawNameplate', BorderFrame.drawNameplate, 'OVERRIDE');
  }
});

Hooks.on('ready', () => (BCC = new BCconfig()));
Hooks.on('renderTokenHUD', (app, html, data) => {
  BorderFrame.AddBorderToggle(app, html, data);
});

class BCconfig {
  constructor() {
    this.symbaroum = {
      value: 'actor.data.data.health.toughness.value',
      max: 'actor.data.data.health.toughness.max',
      tempMax: undefined,
      temp: undefined,
    };
    this.dnd5e = {
      value: 'actor.data.data.attributes.hp.value',
      max: 'actor.data.data.attributes.hp.max',
      tempMax: undefined,
      temp: 'actor.data.data.attributes.hp.temp',
    };
    this.pf2e = {
      value: 'actor.data.data.attributes.hp.value',
      max: 'actor.data.data.attributes.hp.max',
      tempMax: 'actor.data.data.attributes.hp.tempmax',
      temp: 'actor.data.data.attributes.hp.temp',
    };
    this.pf1 = {
      value: 'actor.data.data.attributes.hp.value',
      max: 'actor.data.data.attributes.hp.max',
      tempMax: undefined,
      temp: 'actor.data.data.attributes.hp.temp',
    };
    this.swade = {
      value: 'actor.data.data.wounds.value',
      max: 'actor.data.data.wounds.max',
      tempMax: undefined,
      temp: undefined,
    };
    this.stepLevel = game.settings.get('Border-Control', 'stepLevel');
    this.endColor = hexToRGB(colorStringToHex(game.settings.get('Border-Control', 'healthGradientA')));
    this.startColor = hexToRGB(colorStringToHex(game.settings.get('Border-Control', 'healthGradientB')));
    this.tempColor = hexToRGB(colorStringToHex(game.settings.get('Border-Control', 'healthGradientC')));
    this.colorArray = BorderFrame.interpolateColors(
      `rgb(${this.startColor[0] * 255}, ${this.startColor[1] * 255}, ${this.startColor[2] * 255})`,
      `rgb(${this.endColor[0] * 255}, ${this.endColor[1] * 255}, ${this.endColor[2] * 255})`,
      this.stepLevel,
    );
    this.tempArray = BorderFrame.interpolateColors(
      `rgb(${this.endColor[0] * 255}, ${this.endColor[1] * 255}, ${this.endColor[2] * 255})`,
      `rgb(${this.tempColor[0] * 255}, ${this.tempColor[1] * 255}, ${this.tempColor[2] * 255})`,
      this.stepLevel,
    );

    this.currentSystem = this[game.system.id];
  }
}
Hooks.on('renderSettingsConfig', (app, el, data) => {
  let nC = game.settings.get('Border-Control', 'neutralColor');
  let fC = game.settings.get('Border-Control', 'friendlyColor');
  let hC = game.settings.get('Border-Control', 'hostileColor');
  let cC = game.settings.get('Border-Control', 'controlledColor');
  let pC = game.settings.get('Border-Control', 'partyColor');
  let nCE = game.settings.get('Border-Control', 'neutralColorEx');
  let fCE = game.settings.get('Border-Control', 'friendlyColorEx');
  let hCE = game.settings.get('Border-Control', 'hostileColorEx');
  let cCE = game.settings.get('Border-Control', 'controlledColorEx');
  let pCE = game.settings.get('Border-Control', 'partyColorEx');
  let tC = game.settings.get('Border-Control', 'targetColor');
  let tCE = game.settings.get('Border-Control', 'targetColorEx');
  let gS = game.settings.get('Border-Control', 'healthGradientA');
  let gE = game.settings.get('Border-Control', 'healthGradientB');
  let gT = game.settings.get('Border-Control', 'healthGradientC');
  el.find('[name="Border-Control.neutralColor"]')
    .parent()
    .append(`<input type="color" value="${nC}" data-edit="Border-Control.neutralColor">`);
  el.find('[name="Border-Control.friendlyColor"]')
    .parent()
    .append(`<input type="color" value="${fC}" data-edit="Border-Control.friendlyColor">`);
  el.find('[name="Border-Control.hostileColor"]')
    .parent()
    .append(`<input type="color" value="${hC}" data-edit="Border-Control.hostileColor">`);
  el.find('[name="Border-Control.controlledColor"]')
    .parent()
    .append(`<input type="color"value="${cC}" data-edit="Border-Control.controlledColor">`);
  el.find('[name="Border-Control.partyColor"]')
    .parent()
    .append(`<input type="color"value="${pC}" data-edit="Border-Control.partyColor">`);
  el.find('[name="Border-Control.targetColor"]')
    .parent()
    .append(`<input type="color"value="${tC}" data-edit="Border-Control.targetColor">`);

  el.find('[name="Border-Control.neutralColorEx"]')
    .parent()
    .append(`<input type="color" value="${nCE}" data-edit="Border-Control.neutralColorEx">`);
  el.find('[name="Border-Control.friendlyColorEx"]')
    .parent()
    .append(`<input type="color" value="${fCE}" data-edit="Border-Control.friendlyColorEx">`);
  el.find('[name="Border-Control.hostileColorEx"]')
    .parent()
    .append(`<input type="color" value="${hCE}" data-edit="Border-Control.hostileColorEx">`);
  el.find('[name="Border-Control.controlledColorEx"]')
    .parent()
    .append(`<input type="color"value="${cCE}" data-edit="Border-Control.controlledColorEx">`);
  el.find('[name="Border-Control.partyColorEx"]')
    .parent()
    .append(`<input type="color"value="${pCE}" data-edit="Border-Control.partyColorEx">`);
  el.find('[name="Border-Control.targetColorEx"]')
    .parent()
    .append(`<input type="color"value="${tCE}" data-edit="Border-Control.targetColorEx">`);

  el.find('[name="Border-Control.healthGradientA"]')
    .parent()
    .append(`<input type="color"value="${gS}" data-edit="Border-Control.healthGradientA">`);
  el.find('[name="Border-Control.healthGradientB"]')
    .parent()
    .append(`<input type="color"value="${gE}" data-edit="Border-Control.healthGradientB">`);
  el.find('[name="Border-Control.healthGradientC"]')
    .parent()
    .append(`<input type="color"value="${gT}" data-edit="Border-Control.healthGradientC">`);
});

Hooks.on('createToken', data => {
  let token = canvas.tokens.get(data._id);
  if (!token.owner) token.cursor = 'default';
});

Hooks.once('ready', () => {
  canvas.tokens.placeables.forEach(t => {
    if (!t.owner) t.cursor = 'default';
  });
});

class BorderFrame {
  static AddBorderToggle(app, html, data) {
    if (!game.user.isGM) return;
    if (!game.settings.get('Border-Control', 'enableHud')) return;
    const buttonPos = game.settings.get('Border-Control', 'hudPos');
    const borderButton = `<div class="control-icon border ${
      app.object.data.flags['Border-Control']?.noBorder ? 'active' : ''
    }" title="Toggle Border"> <i class="fas fa-border-style"></i></div>`;
    let Pos = html.find(buttonPos);
    Pos.append(borderButton);
    html.find('.border').click(this.ToggleBorder.bind(app));
  }

  static async ToggleBorder(event) {
    const border = this.object.document.getFlag('Border-Control', 'noBorder');
    await this.object.document.setFlag('Border-Control', 'noBorder', !border);
    event.currentTarget.classList.toggle('active', !border);
  }
  static newBorder() {
    if (!BCC) BCC = new BCconfig();
    this.border.clear();
    let borderColor = this._getBorderColor();
    if (!borderColor) return;
    switch (game.settings.get('Border-Control', 'removeBorders')) {
      case '0':
        break;
      case '1':
        if (!this.owner) return;
        break;
      case '2':
        return;
    }
    if (this.data.flags['Border-Control']?.noBorder) return;
    const t = game.settings.get('Border-Control', 'borderWidth') || CONFIG.Canvas.objectBorderThickness;
    if (game.settings.get('Border-Control', 'healthGradient')) {
      const systemPath = BCC.currentSystem;
      const stepLevel = BCC.stepLevel;
      const hpMax = getProperty(this, systemPath.max) + (getProperty(this, systemPath.tempMax) ?? 0);
      const hpValue = getProperty(this, systemPath.value);
      const hpDecimal = parseInt(BorderFrame.clamp((hpValue / hpMax) * stepLevel, stepLevel, 1)) || 1;
      const color = BorderFrame.rgbToHex(BCC.colorArray[hpDecimal - 1]);
      borderColor.INT = parseInt(color.substr(1), 16);
      if (game.settings.get('Border-Control', 'tempHPgradient') && getProperty(this, systemPath.temp) > 0) {
        const tempValue = getProperty(this, systemPath.temp);
        const tempDecimal = parseInt(BorderFrame.clamp((tempValue / (hpMax / 2)) * stepLevel, stepLevel, 1));
        const tempEx = BorderFrame.rgbToHex(BCC.tempArray[tempDecimal - 1]);
        borderColor.EX = parseInt(tempEx.substr(1), 16);
      }
    }
    // Draw Hex border for size 1 tokens on a hex grid
    const gt = CONST.GRID_TYPES;
    const hexTypes = [gt.HEXEVENQ, gt.HEXEVENR, gt.HEXODDQ, gt.HEXODDR];
    if (game.settings.get('Border-Control', 'circleBorders')) {
      const p = game.settings.get('Border-Control', 'borderOffset');
      const h = Math.round(t / 2);
      const o = Math.round(h / 2);
      this.border.lineStyle(t, borderColor.EX, 0.8).drawCircle(this.w / 2, this.h / 2, this.w / 2 + t + p);
      this.border.lineStyle(h, borderColor.INT, 1.0).drawCircle(this.w / 2, this.h / 2, this.w / 2 + h + t / 2 + p);
    } else if (hexTypes.includes(canvas.grid.type) && this.data.width === 1 && this.data.height === 1) {
      const p = game.settings.get('Border-Control', 'borderOffset');
      const q = Math.round(p / 2);
      const polygon = canvas.grid.grid.getPolygon(-1.5 - q, -1.5 - q, this.w + 2 + p, this.h + 2 + p);
      this.border.lineStyle(t, borderColor.EX, 0.8).drawPolygon(polygon);
      this.border.lineStyle(t / 2, borderColor.INT, 1.0).drawPolygon(polygon);
    }

    // Otherwise Draw Square border
    else {
      const p = game.settings.get('Border-Control', 'borderOffset');
      const q = Math.round(p / 2);
      const h = Math.round(t / 2);
      const o = Math.round(h / 2);
      this.border.lineStyle(t, borderColor.EX, 0.8).drawRoundedRect(-o - q, -o - q, this.w + h + p, this.h + h + p, 3);
      this.border.lineStyle(h, borderColor.INT, 1.0).drawRoundedRect(-o - q, -o - q, this.w + h + p, this.h + h + p, 3);
    }
    return;
  }

  static clamp(value, max, min) {
    return Math.min(Math.max(value, min), max);
  }
  static newBorderColor() {
    const overrides = {
      CONTROLLED: {
        INT: parseInt(game.settings.get('Border-Control', 'controlledColor').substr(1), 16),
        EX: parseInt(game.settings.get('Border-Control', 'controlledColorEx').substr(1), 16),
      },
      FRIENDLY: {
        INT: parseInt(game.settings.get('Border-Control', 'friendlyColor').substr(1), 16),
        EX: parseInt(game.settings.get('Border-Control', 'friendlyColorEx').substr(1), 16),
      },
      NEUTRAL: {
        INT: parseInt(game.settings.get('Border-Control', 'neutralColor').substr(1), 16),
        EX: parseInt(game.settings.get('Border-Control', 'neutralColorEx').substr(1), 16),
      },
      HOSTILE: {
        INT: parseInt(game.settings.get('Border-Control', 'hostileColor').substr(1), 16),
        EX: parseInt(game.settings.get('Border-Control', 'hostileColorEx').substr(1), 16),
      },
      PARTY: {
        INT: parseInt(game.settings.get('Border-Control', 'partyColor').substr(1), 16),
        EX: parseInt(game.settings.get('Border-Control', 'partyColorEx').substr(1), 16),
      },
    };
    if (this._controlled) return overrides.CONTROLLED;
    else if (this._hover) {
      let disPath = isNewerVersion(game.data.version, '0.8.0') ? CONST.TOKEN_DISPOSITIONS : TOKEN_DISPOSITIONS;
      let d = parseInt(this.data.disposition);
      if (!game.user.isGM && this.owner) return overrides.CONTROLLED;
      else if (this.actor?.hasPlayerOwner) return overrides.PARTY;
      else if (d === disPath.FRIENDLY) return overrides.FRIENDLY;
      else if (d === disPath.NEUTRAL) return overrides.NEUTRAL;
      else return overrides.HOSTILE;
    } else return null;
  }

  static newTarget() {
    const multiplier = game.settings.get('Border-Control', 'targetSize');
    const INT = parseInt(game.settings.get('Border-Control', 'targetColor').substr(1), 16);
    const EX = parseInt(game.settings.get('Border-Control', 'targetColorEx').substr(1), 16);

    this.target.clear();
    if (!this.targeted.size) return;

    // Determine whether the current user has target and any other users
    const [others, user] = Array.from(this.targeted).partition(u => u === game.user);
    const userTarget = user.length;

    // For the current user, draw the target arrows
    if (userTarget) {
      if (game.settings.get('Border-Control', 'internatTarget')) {
        let p = -4; // padding
        let aw = -12 * multiplier; // arrow width
        let h = this.h; // token height
        let hh = h / 2; // half height
        let w = this.w; // token width
        let hw = w / 2; // half width
        let ah = (canvas.dimensions.size / 3) * multiplier;
        this.target
          .beginFill(INT, 1.0)
          .lineStyle(1, EX)
          .drawPolygon([-p - aw, hh, -p, hh - ah, -p, hh + ah])
          .drawPolygon([w + p + aw, hh, w + p, hh - ah, w + p, hh + ah])
          .drawPolygon([hw, -p - aw, hw - ah, -p, hw + ah, -p])
          .drawPolygon([hw, h + p + aw, hw - ah, h + p, hw + ah, h + p]);
      } else {
        let p = 4; // padding
        let aw = 12 * multiplier; // arrow width
        let h = this.h; // token height
        let hh = h / 2; // half height
        let w = this.w; // token width
        let hw = w / 2; // half width
        let ah = (canvas.dimensions.size / 3) * multiplier;
        this.target
          .beginFill(INT, 1.0)
          .lineStyle(1, EX)
          .drawPolygon([-p, hh, -p - aw, hh - ah, -p - aw, hh + ah])
          .drawPolygon([w + p, hh, w + p + aw, hh - ah, w + p + aw, hh + ah])
          .drawPolygon([hw, -p, hw - ah, -p - aw, hw + ah, -p - aw])
          .drawPolygon([hw, h + p, hw - ah, h + p + aw, hw + ah, h + p + aw]);
      }
    }
    // For other users, draw offset pips
    for (let [i, u] of others.entries()) {
      let color = colorStringToHex(u.data.color);
      this.target
        .beginFill(color, 1.0)
        .lineStyle(2, 0x0000000)
        .drawCircle(2 + i * 8, 0, 6);
    }
  }

  static componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  static rgbToHex(A) {
    if (A[0] === undefined || A[1] === undefined || A[2] === undefined) console.error('RGB color invalid');
    return '#' + BorderFrame.componentToHex(A[0]) + BorderFrame.componentToHex(A[1]) + BorderFrame.componentToHex(A[2]);
  }

  static hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  static interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) {
      factor = 0.5;
    }
    var result = color1.slice();
    for (var i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  }

  // My function to interpolate between two colors completely, returning an array
  static interpolateColors(color1, color2, steps) {
    var stepFactor = 1 / (steps - 1),
      interpolatedColorArray = [];

    color1 = color1.match(/\d+/g).map(Number);
    color2 = color2.match(/\d+/g).map(Number);

    for (var i = 0; i < steps; i++) {
      interpolatedColorArray.push(BorderFrame.interpolateColor(color1, color2, stepFactor * i));
    }

    return interpolatedColorArray;
  }

  static getActorHpPath() {
    switch (game.system.id) {
      case 'symbaroum':
        return {
          value: 'actor.data.data.health.toughness.value',
          max: 'actor.data.data.health.toughness.max',
          tempMax: undefined,
          temp: undefined,
        };
      case 'dnd5e':
        return {
          value: 'actor.data.data.attributes.hp.value',
          max: 'actor.data.data.attributes.hp.max',
          tempMax: 'actor.data.data.attributes.hp.tempmax',
          temp: 'actor.data.data.attributes.hp.temp',
        };
    }
  }

  static drawNameplate() {
    const offSet = game.settings.get('Border-Control', 'borderOffset');
    const yOff = game.settings.get('Border-Control', 'nameplateOffset');
    const bOff = game.settings.get('Border-Control', 'borderWidth') / 2;
    const replaceFont = game.settings.get('Border-Control', 'plateFont');
    const sizeMulti = game.settings.get('Border-Control', 'sizeMultiplier');

    if (game.settings.get('Border-Control', 'circularNameplate')) {
      let style = CONFIG.canvasTextStyle.clone();
      let extraRad = game.settings.get('Border-Control', 'circularNameplateRadius');
      if (!game.modules.get('custom-nameplates')?.active) {
        style.fontFamily = replaceFont;
        style.fontSize *= sizeMulti;
        if (game.settings.get('Border-Control', 'plateConsistency')) style.fontSize *= canvas.grid.size / 100;
      }
      var text = new PreciseText(this.name, style);
      text.resolution = 2;
      text.style.trim = true;
      text.updateText();

      var radius = this.w / 2 + text.texture.height + bOff + extraRad;
      var maxRopePoints = 100;
      var step = Math.PI / maxRopePoints;

      var ropePoints = maxRopePoints - Math.round((text.texture.width / (radius * Math.PI)) * maxRopePoints);
      ropePoints /= 2;

      var points = [];
      for (var i = maxRopePoints - ropePoints; i > ropePoints; i--) {
        var x = radius * Math.cos(step * i);
        var y = radius * Math.sin(step * i);
        points.push(new PIXI.Point(-x, -y));
      }
      const name = new PIXI.SimpleRope(text.texture, points);
      name.rotation = Math.PI;
      name.position.set(this.w / 2, this.h / 2 + yOff);
      return name;
    } else {
      const style = this._getTextStyle();
      if (!game.modules.get('custom-nameplates')?.active) {
        style.fontFamily = game.settings.get('Border-Control', 'plateFont');
        style.fontSize *= sizeMulti;
      }
      const name = new PreciseText(this.data.name, style);
      name.anchor.set(0.5, 0);
      name.position.set(this.w / 2, this.h + bOff + yOff + offSet);
      return name;
    }
  }

  static refreshAll() {
    canvas.tokens.placeables.forEach(t => t.draw());
  }
}
