let gameType = prompt("Выберите режим игры (1 или 2): \n\n1 - Один игрок (с ботом)\n2 - Два игрока");
let player = document.getElementById('player');
let cubes = Array.from(document.querySelectorAll(".cube"));
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let forth = document.getElementById('forth');
let fifth = document.getElementById('fifth');
let sixth = document.getElementById('sixth');
let seventh = document.getElementById('seventh');
let eighth = document.getElementById('eighth');
let ninth = document.getElementById('ninth');

if (gameType === '2') {
    player.textContent = 'Ход: ❌';

    cubes.forEach(cube => {
        cube.addEventListener('click', function () {
            if (cube.textContent === '') {
                cube.textContent = player.textContent === 'Ход: ❌' ? '❌' : '⚪';
                player.textContent = player.textContent === 'Ход: ❌' ? 'Ход: ⚪' : 'Ход: ❌';

                setTimeout(() => {
                    if (first.textContent === '❌' && second.textContent === '❌' && third.textContent === '❌') {
                        first.classList.toggle('win');
                        second.classList.toggle('win');
                        third.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(forth.textContent === '❌' && fifth.textContent === '❌' && sixth.textContent === '❌') {
                        forth.classList.toggle('win');
                        fifth.classList.toggle('win');
                        sixth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(seventh.textContent === '❌' && eighth.textContent === '❌' && ninth.textContent === '❌') {
                        seventh.classList.toggle('win');
                        eighth.classList.toggle('win');
                        ninth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(first.textContent === '❌' && forth.textContent === '❌' && seventh.textContent === '❌') {
                        first.classList.toggle('win');
                        forth.classList.toggle('win');
                        seventh.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(second.textContent === '❌' && fifth.textContent === '❌' && eighth.textContent === '❌') {
                        second.classList.toggle('win');
                        fifth.classList.toggle('win');
                        eighth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(third.textContent === '❌' && sixth.textContent === '❌' && ninth.textContent === '❌') {
                        third.classList.toggle('win');
                        sixth.classList.toggle('win');
                        ninth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(first.textContent === '❌' && fifth.textContent === '❌' && ninth.textContent === '❌') {
                        first.classList.toggle('win');
                        fifth.classList.toggle('win');
                        ninth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(third.textContent === '❌' && fifth.textContent === '❌' && seventh.textContent === '❌') {
                        third.classList.toggle('win');
                        fifth.classList.toggle('win');
                        seventh.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if (first.textContent === '⚪' && second.textContent === '⚪' && third.textContent === '⚪') {
                        first.classList.toggle('win');
                        second.classList.toggle('win');
                        third.classList.toggle('win');
                        setTimeout(() => {
                            alert('⚪ Победил!');
                            location.reload();
                        }, 700);
                    } else if(forth.textContent === '⚪' && fifth.textContent === '⚪' && sixth.textContent === '⚪') {
                        forth.classList.toggle('win');
                        fifth.classList.toggle('win');
                        sixth.classList.toggle('win');
                        setTimeout(() => {
                            alert('⚪ Победил!');
                            location.reload();
                        }, 700);
                    } else if(seventh.textContent === '⚪' && eighth.textContent === '⚪' && ninth.textContent === '⚪') {
                        seventh.classList.toggle('win');
                        eighth.classList.toggle('win');
                        ninth.classList.toggle('win');
                        setTimeout(() => {
                            alert('⚪ Победил!');
                            location.reload();
                        }, 700);
                    } else if(first.textContent === '⚪' && forth.textContent === '⚪' && seventh.textContent === '⚪') {
                        first.classList.toggle('win');
                        forth.classList.toggle('win');
                        seventh.classList.toggle('win');
                        setTimeout(() => {
                            alert('⚪ Победил!');
                            location.reload();
                        }, 700);
                    } else if(second.textContent === '⚪' && fifth.textContent === '⚪' && eighth.textContent === '⚪') {
                        second.classList.toggle('win');
                        fifth.classList.toggle('win');
                        eighth.classList.toggle('win');
                        setTimeout(() => {
                            alert('⚪ Победил!');
                            location.reload();
                        }, 700);
                    } else if(third.textContent === '⚪' && sixth.textContent === '⚪' && ninth.textContent === '⚪') {
                        third.classList.toggle('win');
                        sixth.classList.toggle('win');
                        ninth.classList.toggle('win');
                        setTimeout(() => {
                            alert('⚪ Победил!');
                            location.reload();
                        }, 700);
                    } else if(first.textContent === '⚪' && fifth.textContent === '⚪' && ninth.textContent === '⚪') {
                        first.classList.toggle('win');
                        fifth.classList.toggle('win');
                        ninth.classList.toggle('win');
                        setTimeout(() => {
                            alert('⚪ Победил!');
                            location.reload();
                        }, 700);
                    } else if(third.textContent === '⚪' && fifth.textContent === '⚪' && seventh.textContent === '⚪') {
                        third.classList.toggle('win');
                        fifth.classList.toggle('win');
                        seventh.classList.toggle('win');
                        setTimeout(() => {
                            alert('⚪ Победил!');
                            location.reload();
                        }, 700);
                    } else if((first.textContent === '❌' || first.textContent === '⚪') && (second.textContent === '❌' || second.textContent === '⚪') && (third.textContent === '❌' || third.textContent === '⚪') && (forth.textContent === '❌' || forth.textContent === '⚪') && (fifth.textContent === '❌' || fifth.textContent === '⚪') && (sixth.textContent === '❌' || sixth.textContent === '⚪') && (seventh.textContent === '❌' || seventh.textContent === '⚪') && (eighth.textContent === '❌' || eighth.textContent === '⚪') && (ninth.textContent === '❌' || ninth.textContent === '⚪')) {
                        alert('Ничья!');
                        location.reload();
                    }
                }, 100);
            }
        });
    });
} else if (gameType === '1') {
    player.textContent = 'Ход: ❌';

    cubes.forEach(cube => {
        cube.addEventListener('click', function () {
            if (cube.textContent === '' && player.textContent === 'Ход: ❌') {
                cube.textContent = '❌';
                setTimeout(() => {
                    if (first.textContent === '❌' && second.textContent === '❌' && third.textContent === '❌') {
                        first.classList.toggle('win');
                        second.classList.toggle('win');
                        third.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(forth.textContent === '❌' && fifth.textContent === '❌' && sixth.textContent === '❌') {
                        forth.classList.toggle('win');
                        fifth.classList.toggle('win');
                        sixth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(seventh.textContent === '❌' && eighth.textContent === '❌' && ninth.textContent === '❌') {
                        seventh.classList.toggle('win');
                        eighth.classList.toggle('win');
                        ninth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(first.textContent === '❌' && forth.textContent === '❌' && seventh.textContent === '❌') {
                        first.classList.toggle('win');
                        forth.classList.toggle('win');
                        seventh.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(second.textContent === '❌' && fifth.textContent === '❌' && eighth.textContent === '❌') {
                        second.classList.toggle('win');
                        fifth.classList.toggle('win');
                        eighth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(third.textContent === '❌' && sixth.textContent === '❌' && ninth.textContent === '❌') {
                        third.classList.toggle('win');
                        sixth.classList.toggle('win');
                        ninth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(first.textContent === '❌' && fifth.textContent === '❌' && ninth.textContent === '❌') {
                        first.classList.toggle('win');
                        fifth.classList.toggle('win');
                        ninth.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    } else if(third.textContent === '❌' && fifth.textContent === '❌' && seventh.textContent === '❌') {
                        third.classList.toggle('win');
                        fifth.classList.toggle('win');
                        seventh.classList.toggle('win');
                        setTimeout(() => {
                            alert('❌ Победил!');
                            location.reload();
                        }, 700);
                    }
                }, 100);
                player.textContent = 'Ход: ⚪';

                setTimeout(() => {
                    let emptyCubes = cubes.filter(c => c.textContent === '');

                    if (first.textContent === '⚪' && second.textContent === '⚪' && third.textContent === '') {
                        third.textContent = '⚪';
                    } else if (second.textContent === '⚪' && third.textContent === '⚪' && first.textContent === '') {
                        first.textContent = '⚪';
                    } else if (first.textContent === '⚪' && third.textContent === '⚪' && second.textContent === '') {
                        second.textContent = '⚪';
                    } else if (forth.textContent === '⚪' && fifth.textContent === '⚪' && sixth.textContent === '') {
                        sixth.textContent = '⚪';
                    } else if (forth.textContent === '⚪' && sixth.textContent === '⚪' && fifth.textContent === '') {
                        fifth.textContent = '⚪';
                    } else if (fifth.textContent === '⚪' && sixth.textContent === '⚪' && forth.textContent === '') {
                        forth.textContent = '⚪';
                    } else if (seventh.textContent === '⚪' && eighth.textContent === '⚪' && ninth.textContent === '') {
                        ninth.textContent = '⚪';
                    } else if (seventh.textContent === '⚪' && ninth.textContent === '⚪' && eighth.textContent === '') {
                        eighth.textContent = '⚪';
                    } else if (eighth.textContent === '⚪' && ninth.textContent === '⚪' && seventh.textContent === '') {
                        seventh.textContent = '⚪';
                    } else if (first.textContent === '⚪' && fifth.textContent === '⚪' && ninth.textContent === '') {
                        ninth.textContent = '⚪';
                    } else if (first.textContent === '⚪' && ninth.textContent === '⚪' && fifth.textContent === '') {
                        fifth.textContent = '⚪';
                    } else if (fifth.textContent === '⚪' && ninth.textContent === '⚪' && first.textContent === '') {
                        first.textContent = '⚪';
                    } else if (third.textContent === '⚪' && fifth.textContent === '⚪' && seventh.textContent === '') {
                        seventh.textContent = '⚪';
                    } else if (third.textContent === '⚪' && seventh.textContent === '⚪' && fifth.textContent === '') {
                        fifth.textContent = '⚪';
                    } else if (fifth.textContent === '⚪' && seventh.textContent === '⚪' && third.textContent === '') {
                        third.textContent = '⚪';
                    } else if (second.textContent === '⚪' && fifth.textContent === '⚪' && eighth.textContent === '') {
                        eighth.textContent = '⚪';
                    } else if (second.textContent === '⚪' && eighth.textContent === '⚪' && fifth.textContent === '') {
                        fifth.textContent = '⚪';
                    } else if (fifth.textContent === '⚪' && eighth.textContent === '⚪' && second.textContent === '') {
                        second.textContent = '⚪';
                    }else if (first.textContent === '⚪' && forth.textContent === '⚪' && seventh.textContent === '') {
                        seventh.textContent = '⚪';
                    } else if (first.textContent === '⚪' && seventh.textContent === '⚪' && forth.textContent === '') {
                        forth.textContent = '⚪';
                    } else if (seventh.textContent === '⚪' && forth.textContent === '⚪' && first.textContent === '') {
                        first.textContent = '⚪';
                    }else if (third.textContent === '⚪' && sixth.textContent === '⚪' && ninth.textContent === '') {
                        ninth.textContent = '⚪';
                    } else if (third.textContent === '⚪' && ninth.textContent === '⚪' && sixth.textContent === '') {
                        sixth.textContent = '⚪';
                    } else if (sixth.textContent === '⚪' && ninth.textContent === '⚪' && third.textContent === '') {
                        third.textContent = '⚪';
                    }else if (first.textContent === '❌' && second.textContent === '❌' && third.textContent === '') {
                        third.textContent = '⚪';
                    } else if (second.textContent === '❌' && third.textContent === '❌' && first.textContent === '') {
                        first.textContent = '⚪';
                    } else if (first.textContent === '❌' && third.textContent === '❌' && second.textContent === '') {
                        second.textContent = '⚪';
                    } else if (forth.textContent === '❌' && fifth.textContent === '❌' && sixth.textContent === '') {
                        sixth.textContent = '⚪';
                    } else if (forth.textContent === '❌' && sixth.textContent === '❌' && fifth.textContent === '') {
                        fifth.textContent = '⚪';
                    } else if (fifth.textContent === '❌' && sixth.textContent === '❌' && forth.textContent === '') {
                        forth.textContent = '⚪';
                    } else if (seventh.textContent === '❌' && eighth.textContent === '❌' && ninth.textContent === '') {
                        ninth.textContent = '⚪';
                    } else if (seventh.textContent === '❌' && ninth.textContent === '❌' && eighth.textContent === '') {
                        eighth.textContent = '⚪';
                    } else if (eighth.textContent === '❌' && ninth.textContent === '❌' && seventh.textContent === '') {
                        seventh.textContent = '⚪';
                    } else if (first.textContent === '❌' && fifth.textContent === '❌' && ninth.textContent === '') {
                        ninth.textContent = '⚪';
                    } else if (first.textContent === '❌' && ninth.textContent === '❌' && fifth.textContent === '') {
                        fifth.textContent = '⚪';
                    } else if (fifth.textContent === '❌' && ninth.textContent === '❌' && first.textContent === '') {
                        first.textContent = '⚪';
                    } else if (third.textContent === '❌' && fifth.textContent === '❌' && seventh.textContent === '') {
                        seventh.textContent = '⚪';
                    } else if (third.textContent === '❌' && seventh.textContent === '❌' && fifth.textContent === '') {
                        fifth.textContent = '⚪';
                    } else if (fifth.textContent === '❌' && seventh.textContent === '❌' && third.textContent === '') {
                        third.textContent = '⚪';
                    }else if (second.textContent === '❌' && fifth.textContent === '❌' && eighth.textContent === '') {
                        eighth.textContent = '⚪';
                    } else if (second.textContent === '❌' && eighth.textContent === '❌' && fifth.textContent === '') {
                        fifth.textContent = '⚪';
                    } else if (fifth.textContent === '❌' && eighth.textContent === '❌' && second.textContent === '') {
                        second.textContent = '⚪';
                    }else if (first.textContent === '❌' && forth.textContent === '❌' && seventh.textContent === '') {
                        seventh.textContent = '⚪';
                    } else if (first.textContent === '❌' && seventh.textContent === '❌' && forth.textContent === '') {
                        forth.textContent = '⚪';
                    } else if (seventh.textContent === '❌' && forth.textContent === '❌' && first.textContent === '') {
                        first.textContent = '⚪';
                    }else if (third.textContent === '❌' && sixth.textContent === '❌' && ninth.textContent === '') {
                        ninth.textContent = '⚪';
                    } else if (third.textContent === '❌' && ninth.textContent === '❌' && sixth.textContent === '') {
                        sixth.textContent = '⚪';
                    } else if (sixth.textContent === '❌' && ninth.textContent === '❌' && third.textContent === '') {
                        third.textContent = '⚪';
                    } else if (emptyCubes.length > 0) {
                        let bot = emptyCubes[Math.floor(Math.random() * emptyCubes.length)];
                        bot.textContent = '⚪';
                    }

                    setTimeout(() => {
                        if (first.textContent === '⚪' && second.textContent === '⚪' && third.textContent === '⚪') {
                            first.classList.toggle('win');
                            second.classList.toggle('win');
                            third.classList.toggle('win');
                            setTimeout(() => {
                                alert('⚪ Победил!');
                                location.reload();
                            }, 700);
                        } else if(forth.textContent === '⚪' && fifth.textContent === '⚪' && sixth.textContent === '⚪') {
                            forth.classList.toggle('win');
                            fifth.classList.toggle('win');
                            sixth.classList.toggle('win');
                            setTimeout(() => {
                                alert('⚪ Победил!');
                                location.reload();
                            }, 700);
                        } else if(seventh.textContent === '⚪' && eighth.textContent === '⚪' && ninth.textContent === '⚪') {
                            seventh.classList.toggle('win');
                            eighth.classList.toggle('win');
                            ninth.classList.toggle('win');
                            setTimeout(() => {
                                alert('⚪ Победил!');
                                location.reload();
                            }, 700);
                        } else if(first.textContent === '⚪' && forth.textContent === '⚪' && seventh.textContent === '⚪') {
                            first.classList.toggle('win');
                            forth.classList.toggle('win');
                            seventh.classList.toggle('win');
                            setTimeout(() => {
                                alert('⚪ Победил!');
                                location.reload();
                            }, 700);
                        } else if(second.textContent === '⚪' && fifth.textContent === '⚪' && eighth.textContent === '⚪') {
                            second.classList.toggle('win');
                            fifth.classList.toggle('win');
                            eighth.classList.toggle('win');
                            setTimeout(() => {
                                alert('⚪ Победил!');
                                location.reload();
                            }, 700);
                        } else if(third.textContent === '⚪' && sixth.textContent === '⚪' && ninth.textContent === '⚪') {
                            third.classList.toggle('win');
                            sixth.classList.toggle('win');
                            ninth.classList.toggle('win');
                            setTimeout(() => {
                                alert('⚪ Победил!');
                                location.reload();
                            }, 700);
                        } else if(first.textContent === '⚪' && fifth.textContent === '⚪' && ninth.textContent === '⚪') {
                            first.classList.toggle('win');
                            fifth.classList.toggle('win');
                            ninth.classList.toggle('win');
                            setTimeout(() => {
                                alert('⚪ Победил!');
                                location.reload();
                            }, 700);
                        } else if(third.textContent === '⚪' && fifth.textContent === '⚪' && seventh.textContent === '⚪') {
                            third.classList.toggle('win');
                            fifth.classList.toggle('win');
                            seventh.classList.toggle('win');
                            setTimeout(() => {
                                alert('⚪ Победил!');
                                location.reload();
                            }, 700);
                        } else if((first.textContent === '❌' || first.textContent === '⚪') && (second.textContent === '❌' || second.textContent === '⚪') && (third.textContent === '❌' || third.textContent === '⚪') && (forth.textContent === '❌' || forth.textContent === '⚪') && (fifth.textContent === '❌' || fifth.textContent === '⚪') && (sixth.textContent === '❌' || sixth.textContent === '⚪') && (seventh.textContent === '❌' || seventh.textContent === '⚪') && (eighth.textContent === '❌' || eighth.textContent === '⚪') && (ninth.textContent === '❌' || ninth.textContent === '⚪')) {
                            alert('Ничья!');
                            location.reload();
                        }
                    },100)

                    player.textContent = 'Ход: ❌';
                }, 1000);
            }
        });
    });
} else {
    alert("Пожалуйста, выберите правильный режим игры (1 или 2)");
    location.reload();
};

// if (
//     (first.textContent === '❌' && second.textContent === '❌' && third.textContent === '❌') ||
//     (forth.textContent === '❌' && fifth.textContent === '❌' && sixth.textContent === '❌') ||
//     (seventh.textContent === '❌' && eighth.textContent === '❌' && ninth.textContent === '❌') ||
//     (first.textContent === '❌' && forth.textContent === '❌' && seventh.textContent === '❌') ||
//     (second.textContent === '❌' && fifth.textContent === '❌' && eighth.textContent === '❌') ||
//     (third.textContent === '❌' && sixth.textContent === '❌' && ninth.textContent === '❌') ||
//     (first.textContent === '❌' && fifth.textContent === '❌' && ninth.textContent === '❌') ||
//     (third.textContent === '❌' && fifth.textContent === '❌' && seventh.textContent === '❌')
// ) {
//     alert('❌ победил!');
// } else if (
//     (first.textContent === '⚪' && second.textContent === '⚪' && third.textContent === '⚪') ||
//     (forth.textContent === '⚪' && fifth.textContent === '⚪' && sixth.textContent === '⚪') ||
//     (seventh.textContent === '⚪' && eighth.textContent === '⚪' && ninth.textContent === '⚪') ||
//     (first.textContent === '⚪' && forth.textContent === '⚪' && seventh.textContent === '⚪') ||
//     (second.textContent === '⚪' && fifth.textContent === '⚪' && eighth.textContent === '⚪') ||
//     (third.textContent === '⚪' && sixth.textContent === '⚪' && ninth.textContent === '⚪') ||
//     (first.textContent === '⚪' && fifth.textContent === '⚪' && ninth.textContent === '⚪') ||
//     (third.textContent === '⚪' && fifth.textContent === '⚪' && seventh.textContent === '⚪')
// ) {
//     alert('⚪ победил!');
// }