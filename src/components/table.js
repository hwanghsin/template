import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const mockHeads = [
    { name: '名稱', hasSort: true },
    { name: '帳號/Email', hasSort: true },
    { name: '部門', hasSort: true },
    { name: '帳號別', hasSort: false },
    { name: '登入時間', hasSort: false }
];
const mockBodie = []; 

const Table = ({ heads = mockHeads, contents = mockBodie, hasInput = true }) => {
    const [check, toggleCheck] = useState({
        isAllChecked: false,
        isOnAsc: true,
        currentName: heads[0].name
    });
    return (
        <table>
            <thead>
                <tr>
                    {hasInput && <th><input type='checkbox' checked /></th>}
                    {heads.map(h => {
                        const isCurrent = check.currentName === h.name && check.isOnAsc;
                        return (
                            <th>
                                <span>{h.name}</span>
                                {h.hasSort && <FontAwesomeIcon icon={isCurrent ? faChevronUp : faChevronDown} />}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {contents.map(c => {
                    return (
                        <tr>
                            {hasInput && <td><input type='checkbox' checked /></td>}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}