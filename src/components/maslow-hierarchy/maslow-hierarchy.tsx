import React, { useState } from 'react';
import './maslow-hierarchy.scss';
import { PuzzlePieceIcon, UserIcon, LightBulbIcon, LanguageIcon } from '@heroicons/react/24/outline';

type LevelType = 'top' | 'upper' | 'lower' | 'bottom';

interface Level {
    description: string;
    icon?: JSX.Element;
    type: LevelType;
}

export default function MaslowHierarchy() {
    const iconClassName = "my-auto mx-auto h-1/3"
    const levels: Array<Level> = [{ type: 'top', description: 'a' }, { type: 'upper', description: 'b' }, { type: 'lower', description: 'c' }, { type: 'bottom', description: 'd' }];
    const [selectedLevel, setSelectedLevel] = useState(levels[3]);

    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-col w-full md:w-1/2">
                {levels.map((level) =>
                    <div key={level.type}
                        onClick={() => setSelectedLevel(level)}
                        className={'hierarchy-level m-auto flex cursor-pointer hover:scale-105 hover:z-10 hover:opacity-100 ' + level.type + (selectedLevel.type === level.type ? ' active ' : '')}>
                            {level.type ==='bottom' && <PuzzlePieceIcon className={iconClassName}></PuzzlePieceIcon>}
                            {level.type ==='lower' && <UserIcon className={iconClassName}></UserIcon>}
                            {level.type ==='upper' && <LanguageIcon className={iconClassName}></LanguageIcon>}
                            {level.type ==='top' && <LightBulbIcon className={iconClassName}></LightBulbIcon>}
                    </div>
                )}
            </div>
            <div>
                {selectedLevel.description}
            </div>
        </div>

    )
}