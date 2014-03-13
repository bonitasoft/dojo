/**
 * Copyright (C) 2014 BonitaSoft S.A.
 * BonitaSoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This library is free software; you can redistribute it and/or modify it under the terms
 * of the GNU Lesser General Public License as published by the Free Software Foundation
 * version 2.1 of the License.
 * This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 * You should have received a copy of the GNU Lesser General Public License along with this
 * program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth
 * Floor, Boston, MA 02110-1301, USA.
 **/
package org.bonitasoft.tdd.tennis;


/**
 * @author Emmanuel Duchastenier
 */
public enum Score {
    _0, _15, _30, _40, DEUCE, ADVANTAGE, GAME, LOOSE;

    // public static List<Score> nominalWinOrder = Arrays.asList(_0, _15, _30, _40, GAME);
    //
    // public static List<Score> catchupWinOrder = Arrays.asList(_30, DEUCE, ADVANTAGE, GAME);
    //
    // public static List<Score> catchupLooseOrder = Arrays.asList(_40, DEUCE, _40, LOOSE);

    public static Score win(final Score currentScore) {
        switch (currentScore) {
            case ADVANTAGE:
                break;
            case DEUCE:
                break;
            case GAME:
                break;
            case LOOSE:
                break;
            case _0:
                return _15;
            case _15:
                return _30;
            case _30:
                return _40;
            case _40:
                break;
            default:
                break;
        }
        return null;
    }

    public static Score loose(final Score currentScore) {
        switch (currentScore) {
            case ADVANTAGE:
                break;
            case DEUCE:
                break;
            case GAME:
                break;
            case LOOSE:
                break;
            case _0:
            case _15:
            case _30:
            case _40:
                return currentScore;
            default:
                break;
        }
        return null;
    }
}
