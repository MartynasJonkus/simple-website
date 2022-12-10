function updateWorksheet() {
    if (document['getElementById']) {
        equation = document['getElementById']('equations')['value'];
        equation = parseInt(equation);
        var _0x6ca4x2 = document['getElementById']('colsnum')['value'];
        numRows = document['getElementById']('rowsnum')['value'];
        _0x6ca4x2 = parseInt(_0x6ca4x2);
        switch (_0x6ca4x2) {
            case 4:
                var _0x6ca4x3 = 'font-size:11pt;letter-spacing:1px';
                paddingRight = '60';
                break;;
            case 3:
                var _0x6ca4x3 = 'font-size:11pt;letter-spacing:3px';
                paddingRight = '60';
                break;;
            case 2:
                var _0x6ca4x3 = 'font-size:14pt;letter-spacing:4px';
                paddingRight = '120';
                break;;
            case 1:
                var _0x6ca4x3 = 'font-size:18pt;letter-spacing:5px';
                paddingRight = '230';
                break;;
        };
        for (var _0x6ca4x4 = SettingsSaved; _0x6ca4x4 < numRows; _0x6ca4x4++) {
            SaveableParameters[_0x6ca4x4] = new Array(3);
            SaveableParameters[_0x6ca4x4][0] = equation;
            SaveableParameters[_0x6ca4x4][1] = document['getElementById']('x2x5x10only')['checked'];
            SaveableParameters[_0x6ca4x4][2] = document['getElementById']('letterused')['value'];
        };
        var _0x6ca4x5 = '';
        _0x6ca4x5 += '<table class="terrystable" width="650" align="center" border="0" cellpadding="0" cellspacing="2" width="650" height="90%">';
        for (var _0x6ca4x6 = 0; _0x6ca4x6 < numRows; _0x6ca4x6++) {
            equation = SaveableParameters[_0x6ca4x6][0];
            document['getElementById']('x2x5x10only')['checked'] = SaveableParameters[_0x6ca4x6][1];
            document['getElementById']('letterused')['value'] = SaveableParameters[_0x6ca4x6][2];
            _0x6ca4x5 += '<tr>';
            for (var _0x6ca4x7 = 0; _0x6ca4x7 < _0x6ca4x2; _0x6ca4x7++) {
                switch (equation) {
                    case 1:
                        var _0x6ca4x8 = 1;
                        break;;
                    case 2:
                        var _0x6ca4x8 = 2;
                        break;;
                    case 3:
                        var _0x6ca4x8 = 3;
                        break;;
                    case 4:
                        var _0x6ca4x8 = 4;
                        break;;
                    case 5:
                        var _0x6ca4x9 = new Array(1, 2);
                        var _0x6ca4x4 = Math['floor'](Math['random']() * 2);
                        var _0x6ca4x8 = _0x6ca4x9[_0x6ca4x4];
                        break;;
                    case 6:
                        var _0x6ca4x9 = new Array(1, 3);
                        var _0x6ca4x4 = Math['floor'](Math['random']() * 2);
                        var _0x6ca4x8 = _0x6ca4x9[_0x6ca4x4];
                        break;;
                    case 7:
                        var _0x6ca4x9 = new Array(3, 4);
                        var _0x6ca4x4 = Math['floor'](Math['random']() * 2);
                        var _0x6ca4x8 = _0x6ca4x9[_0x6ca4x4];
                        break;;
                    case 8:
                        var _0x6ca4x9 = new Array(2, 4);
                        var _0x6ca4x4 = Math['floor'](Math['random']() * 2);
                        var _0x6ca4x8 = _0x6ca4x9[_0x6ca4x4];
                        break;;
                    case 9:
                        var _0x6ca4x9 = new Array(1, 2, 3, 4);
                        var _0x6ca4x4 = Math['floor'](Math['random']() * 4);
                        var _0x6ca4x8 = _0x6ca4x9[_0x6ca4x4];
                        break;;
                    default:
                        break;;
                };
                var _0x6ca4xa = document['getElementById']('letterused')['value'];
                if (_0x6ca4xa == 'any') {
                    _0x6ca4xa = randomString();
                };
                _0x6ca4x5 += '<td class="terryscell" valign="top" align="center" style="' + _0x6ca4x3 + '">';
                var _0x6ca4xb = Math['floor'](Math['random']() * 2);
                switch (_0x6ca4xb) {
                    case 0:
                        var _0x6ca4xc = ' + ';
                        break;;
                    case 1:
                        var _0x6ca4xc = ' - ';
                        break;;
                };
                switch (_0x6ca4x8) {
                    case 1:
                        if (document['getElementById']('x2x5x10only')['checked']) {
                            do {
                                var _0x6ca4xd = randomNumberRange(2, 10);
                                var _0x6ca4xe = randomNumberRange(2, 9);
                                var _0x6ca4xf = _0x6ca4xd * _0x6ca4xe;
                            } while (_0x6ca4xd !== 2 && _0x6ca4xd !== 5 && _0x6ca4xd !== 10 && _0x6ca4xf % 5 !== 0 && _0x6ca4xf % 10 !== 0);;
                        } else {
                            var _0x6ca4xd = randomNumberRange(2, 10);
                            var _0x6ca4xe = randomNumberRange(2, 9);
                            var _0x6ca4xf = _0x6ca4xd * _0x6ca4xe;
                        };
                        _0x6ca4x5 += '<p>' + _0x6ca4xe + _0x6ca4xa + ' = ' + _0x6ca4xf + '</p>';
                        _0x6ca4x5 += '<span class="result">' + _0x6ca4xa + ' = ' + _0x6ca4xd + '</span>';
                        break;;
                    case 2:
                        if (document['getElementById']('x2x5x10only')['checked']) {
                            do {
                                var _0x6ca4xd = randomNumberRange(2, 10);
                                var _0x6ca4xe = randomNumberRange(1, 9);
                                var _0x6ca4x10 = randomNumberRange(1, 9);
                                if (_0x6ca4xc == ' + ') {
                                    var _0x6ca4xf = (_0x6ca4xd * _0x6ca4xe) + _0x6ca4x10;
                                    var _0x6ca4x11 = _0x6ca4xf - _0x6ca4x10;
                                } else {
                                    var _0x6ca4xf = (_0x6ca4xd * _0x6ca4xe) - _0x6ca4x10;
                                    var _0x6ca4x11 = _0x6ca4xf + _0x6ca4x10;
                                };
                            } while (_0x6ca4xd !== 2 && _0x6ca4xd !== 5 && _0x6ca4xd !== 10 && _0x6ca4x11 % 5 !== 0 && _0x6ca4x11 % 10 !== 0);;
                        } else {
                            var _0x6ca4xd = randomNumberRange(2, 9);
                            var _0x6ca4xe = randomNumberRange(1, 9);
                            var _0x6ca4x10 = randomNumberRange(1, 9);
                            if (_0x6ca4xc == ' + ') {
                                var _0x6ca4xf = (_0x6ca4xd * _0x6ca4xe) + _0x6ca4x10;
                            } else {
                                var _0x6ca4xf = (_0x6ca4xd * _0x6ca4xe) - _0x6ca4x10;
                            };
                        };
                        if (_0x6ca4xe == 1) {
                            _0x6ca4xe = ' ';
                        };
                        _0x6ca4x5 += '<p>' + _0x6ca4xe + _0x6ca4xa + _0x6ca4xc + _0x6ca4x10 + ' = ' + _0x6ca4xf + '</p>';
                        _0x6ca4x5 += '<span class="result">' + _0x6ca4xa + ' = ' + _0x6ca4xd + '</span>';
                        break;;
                    case 3:
                        if (document['getElementById']('x2x5x10only')['checked']) {
                            do {
                                do {
                                    var _0x6ca4xe = randomNumberRange(1, 5);
                                    var _0x6ca4x12 = randomNumberRange(2, 6);
                                } while (_0x6ca4xe == _0x6ca4x12);;
                                var _0x6ca4xf = _0x6ca4xe * randomNumberRange(2, 6);
                                var _0x6ca4xd = (_0x6ca4x12 * _0x6ca4xf) / _0x6ca4xe;
                            } while ((_0x6ca4xd !== 2 && _0x6ca4xd !== 5 && _0x6ca4xd !== 10 && _0x6ca4xe % 5 !== 0 && _0x6ca4xe % 10 !== 0) || (_0x6ca4x12 !== 2 && _0x6ca4x12 !== 5 && _0x6ca4xf !== 5 && _0x6ca4xf !== 10));;
                        } else {
                            do {
                                var _0x6ca4xe = randomNumberRange(1, 5);
                                var _0x6ca4x12 = randomNumberRange(2, 6);
                            } while (_0x6ca4xe == _0x6ca4x12);;
                            var _0x6ca4xf = _0x6ca4xe * randomNumberRange(2, 6);
                            var _0x6ca4xd = (_0x6ca4x12 * _0x6ca4xf) / _0x6ca4xe;
                        };
                        if (_0x6ca4xe == 1) {
                            _0x6ca4xe = ' ';
                        };
                        _0x6ca4x5 += '<table border="0" cellspacing="0" cellpadding="5"style="' + _0x6ca4x3 + '">';
                        _0x6ca4x5 += '<tr><td align="center">' + _0x6ca4xe + _0x6ca4xa + '</td><td align="center">= ' + _0x6ca4xf + ' </td></tr>';
                        _0x6ca4x5 += '<tr><td align="center" style="border-top: 2px solid #666;">' + _0x6ca4x12 + '</td><td align="center">&nbsp;</td></tr></table>';
                        _0x6ca4x5 += '<span class="result">' + _0x6ca4xa + ' = ' + _0x6ca4xd + '</span>';
                        break;;
                    case 4:
                        if (document['getElementById']('x2x5x10only')['checked']) {
                            do {
                                do {
                                    var _0x6ca4xe = randomNumberRange(1, 5);
                                    var _0x6ca4x12 = randomNumberRange(2, 6);
                                } while (_0x6ca4xe == _0x6ca4x12);;
                                var _0x6ca4xf = _0x6ca4xe * randomNumberRange(3, 6);
                                var _0x6ca4xd = (_0x6ca4x12 * _0x6ca4xf) / _0x6ca4xe;
                                if (_0x6ca4xc == ' + ') {
                                    var _0x6ca4x13 = randomNumberRange(1, 9);
                                    var _0x6ca4xf = _0x6ca4xf + _0x6ca4x13;
                                    var _0x6ca4x11 = _0x6ca4xf - _0x6ca4x10;
                                } else {
                                    var _0x6ca4x13 = randomNumberRange(1, 9);
                                    var _0x6ca4xf = _0x6ca4xf - _0x6ca4x13;
                                    var _0x6ca4x11 = _0x6ca4xf + _0x6ca4x10;
                                };
                            } while ((_0x6ca4xd !== 2 && _0x6ca4xd !== 5 && _0x6ca4xd !== 10 && _0x6ca4xe % 5 !== 0 && _0x6ca4xe % 10 !== 0) || (_0x6ca4x12 !== 2 && _0x6ca4x12 !== 5 && _0x6ca4x11 !== 5 && _0x6ca4x11 !== 10));;
                        } else {
                            do {
                                var _0x6ca4xe = randomNumberRange(1, 5);
                                var _0x6ca4x12 = randomNumberRange(2, 6);
                            } while (_0x6ca4xe == _0x6ca4x12);;
                            var _0x6ca4xf = _0x6ca4xe * randomNumberRange(3, 6);
                            var _0x6ca4xd = (_0x6ca4x12 * _0x6ca4xf) / _0x6ca4xe;
                            if (_0x6ca4xc == ' + ') {
                                var _0x6ca4x13 = randomNumberRange(1, 9);
                                var _0x6ca4xf = _0x6ca4xf + _0x6ca4x13;
                            } else {
                                var _0x6ca4x13 = randomNumberRange(1, 9);
                                var _0x6ca4xf = _0x6ca4xf - _0x6ca4x13;
                            };
                        };
                        if (_0x6ca4xe == 1) {
                            _0x6ca4xe = ' ';
                        };
                        _0x6ca4x5 += '<table border="0" cellspacing="0" cellpadding="5"style="' + _0x6ca4x3 + '">';
                        _0x6ca4x5 += '<tr><td align="center">' + _0x6ca4xe + _0x6ca4xa + '</td><td align="center"> ' + _0x6ca4xc + _0x6ca4x13 + ' </td><td align="center">= ' + _0x6ca4xf + ' </td></tr>';
                        _0x6ca4x5 += '<tr><td align="center" style="border-top: 2px solid #666;">' + _0x6ca4x12 + '</td><td align="center">&nbsp;</td><td align="center">&nbsp;</td></tr></table>';
                        _0x6ca4x5 += '<span class="result">' + _0x6ca4xa + ' = ' + _0x6ca4xd + '</span>';
                        break;;
                    default:
                        break;;
                };
                _0x6ca4x5 += '</td>';
            };
            _0x6ca4x5 += '</tr>';
        };
        _0x6ca4x5 += '</table>';
        _0x6ca4x5 += '<p align="right" class="dontprint" style="font-size:small; width:900px;"><a href="http://www.helpingwithmath.com/resources/worksheet-generators.htm">Worksheet Generators by HelpingWithMath.com</a></p>';
        document['getElementById']('output')['innerHTML'] = _0x6ca4x5;
    };
};