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
 ** 
 * @since 6.2
 */
package org.dojo.tennis;

/**
 * @author Baptiste Mesta
 * 
 */
public class Player {

    public enum Point {
        _0,
        _15,
        _30,
        _40,
        ADV;

        public Point increase() {
            return values()[ordinal() + 1];
        }

        public Point decrease() {
            return values()[ordinal() - 1];
        }

    }

    public enum Status {
        LOOSE,
        NORMAL,
        DEUCE,
        WIN;

    }

    Point point = Point._0;

    /**
     * @return
     */
    public Point getPoint() {
        return point;
    }

    public Status getStatus() {
        return null;

    }

    /**
     * 
     */
    public void increase() {
        this.point = point.increase();
    }

}
