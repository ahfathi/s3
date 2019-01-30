import React, { Component } from 'react'

import './assets/css/leagueRanking.css'

class LeagueRanking extends Component {
    render() {
        return (
            <div className="leagueRanking">
                <select className="leagueRankingSelection">
                    <option>لیگ خلیج فارس ایران</option>
                    <option>لالیگا اسپانیا</option>
                    <option>بوندس لیگا آلمان</option>
                    <option>سری آ ایتالیا</option>
                    <option>لوشامپیونه فرانسه</option>
                </select>
                <div className="leagueRankingTable">
                {/* TODO: Alphabetic and Score Sorting  */}
                    <table cellSpacing="0">
                        <thead>
                            <tr>
                                <th colSpan="4">لیگ خلیج فارس ایران</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td>تیم</td>
                                <td>بازی‌ها</td>
                                <td>امتیاز</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="leagueRankingIndex">1</td>
                                <td>سپاهان</td>
                                <td>14</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">2</td>
                                <td>پدیده</td>
                                <td>14</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">3</td>
                                <td>پرسپولیس</td>
                                <td>14</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">4</td>
                                <td>تراکتورسازی</td>
                                <td>14</td>
                                <td>26</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">5</td>
                                <td>استقلال</td>
                                <td>14</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">6</td>
                                <td>پارس جنوبی جم</td>
                                <td>14</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">7</td>
                                <td>سایپا</td>
                                <td>14</td>
                                <td>17</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">8</td>
                                <td>پیکان</td>
                                <td>15</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">9</td>
                                <td>نساجی مازندران</td>
                                <td>15</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">10</td>
                                <td>فولاد</td>
                                <td>14</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">11</td>
                                <td>ماشین‌سازی تبریز</td>
                                <td>15</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">12</td>
                                <td>نفت مسجد سلیمان</td>
                                <td>14</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">15</td>
                                <td>سپیدرود رشت</td>
                                <td>15</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td className="leagueRankingIndex">16</td>
                                <td>استقلال خوزستان</td>
                                <td>14</td>
                                <td>5</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}

export default LeagueRanking