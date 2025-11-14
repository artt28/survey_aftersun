// UV 케어 타입 데이터 (8개 타입 시스템)
const uvTypes = {
    'fighter': {
        icon: '🛡️',
        name: '햇살 파이터',
        tagline: '완벽한 UV 차단이 일상인 당신',
        description: '자외선에 민감하고 예방 케어에 진심인 당신! 실내 생활이 많지만 UV 관리를 철저히 하는 스마트한 타입입니다.',

        problems: [
            { emoji: '💸', text: '너무 많은 제품 구매로 비용 부담' },
            { emoji: '😰', text: '과도한 걱정으로 스트레스' },
            { emoji: '🔄', text: '선크림 덧바르기의 번거로움' }
        ],

        routine: {
            morning: [
                '세안 후 토너로 피부결 정리',
                '가벼운 수분 크림 또는 에센스',
                '선크림 SPF30-50 (외출 30분 전, 500원 동전 크기)',
                '목, 귀, 손등까지 꼼꼼히'
            ],
            daytime: [
                '2-3시간마다 선크림 덧바르기',
                '불가능하면: 선스틱/쿠션/미스트 활용',
                '창가 자리는 특히 주의',
                '외출 시 모자/선글라스 병행'
            ],
            evening: [
                '이중 클렌징 (선크림 완전 제거)',
                '진정 토너로 피부 안정',
                '수분크림으로 보습 마무리',
                '주 2-3회: 진정 마스크팩'
            ]
        },

        products: {
            essential: [
                { name: '데일리 선크림', detail: 'SPF30-50 / PA+++, 순한 성분', price: '1-2만원' },
                { name: '휴대용 선스틱', detail: '덧바르기용, 메이크업 위 사용', price: '1만원' },
                { name: '진정 토너', detail: '병풀/녹차 추출물 함유', price: '1.5-2만원' }
            ],
            optional: [
                { name: '진정 미스트', detail: '외출 중 즉각 진정', price: '1-1.5만원' },
                { name: 'UV 차단 립밤', detail: 'SPF15 이상', price: '5천원-1만원' }
            ],
            advanced: [
                { name: '항산화 세럼', detail: '비타민C/E, 광노화 예방', price: '3-5만원' },
                { name: '나이아신아마이드 크림', detail: '미백+진정', price: '2-3만원' }
            ]
        },

        myths: [
            { wrong: '실내에서는 선크림 불필요', right: '창가 1m 이내는 UV-A 50% 노출!' },
            { wrong: '한 번 바르면 하루 종일 OK', right: '효과는 2-3시간, 덧바르기 필수' },
            { wrong: '비싼 제품이 무조건 좋다', right: 'SPF 지수와 성분이 중요. 가성비 제품도 OK' }
        ],

        tips: {
            indoor: '실내 근무자도 창가 자리는 주의! UV-A는 유리를 통과합니다.',
            reapply: '메이크업 위 덧바르기: 티슈로 유분 제거 → 선스틱 또는 쿠션',
            night: '저녁에는 진정에 집중. 과도한 제품 사용은 오히려 역효과'
        }
    },

    'master': {
        icon: '⚡',
        name: '선케어 마스터',
        tagline: '활동적인 삶 속 완벽한 UV 관리',
        description: '야외 활동을 즐기면서도 철저한 UV 예방을 실천하는 당신! 운동과 피부 건강을 모두 지키는 프로입니다.',

        problems: [
            { emoji: '💦', text: '땀으로 인한 선크림 지워짐' },
            { emoji: '⏰', text: '활동 중 덧바르기 어려움' },
            { emoji: '🎒', text: '휴대와 빠른 사용이 필요' }
        ],

        routine: {
            morning: [
                '세안 후 가벼운 수분 제형 제품',
                '워터프루프 선크림 SPF50+ (활동 30분 전)',
                '땀흘리는 부위(이마, 코) 추가 도포',
                '귀, 목뒤, 팔 등 노출 부위 전체'
            ],
            daytime: [
                '활동 중 1-2시간마다 덧바르기 (땀 났다면 즉시)',
                '휴대용 선스틱 또는 스프레이 활용',
                '모자, 선글라스, UV차단 의류 병행',
                '그늘에서 휴식 시에도 방심 금물'
            ],
            evening: [
                '샤워 시 바디워시로 선크림 완전 제거',
                '이중 클렌징 (얼굴)',
                '쿨링 진정 제품으로 피부 온도 낮추기',
                '수분크림 듬뿍 + 주 2-3회 수분팩'
            ]
        },

        products: {
            essential: [
                { name: '워터프루프 선크림', detail: 'SPF50+ PA++++, 땀/물에 강함', price: '2-3만원' },
                { name: '스포츠 선스틱', detail: '휴대 간편, 빠른 도포', price: '1.5-2만원' },
                { name: '쿨링 진정 젤', detail: '운동 후 즉각 진정', price: '1-2만원' }
            ],
            optional: [
                { name: 'UV차단 스프레이', detail: '넓은 면적 빠른 도포', price: '1.5-2만원' },
                { name: '진정 마스크팩', detail: '시트형, 운동 후 사용', price: '개당 1-2천원' }
            ],
            advanced: [
                { name: 'UV차단 기능성 의류', detail: 'UPF50+ 등산복/러닝웨어', price: '3-10만원' },
                { name: '전문가용 선크림', detail: '초강력 지속, 프로 운동선수용', price: '3-5만원' }
            ]
        },

        myths: [
            { wrong: '운동 중에는 선크림이 불편해', right: '최신 제품은 가볍고 끈적임 없음. 워터프루프 필수' },
            { wrong: '한 번 바르면 운동 내내 OK', right: '땀으로 지워짐. 1-2시간마다 덧바르기' },
            { wrong: '흐린 날 운동은 괜찮아', right: 'UV는 80% 통과. 날씨 관계없이 필수' }
        ],

        tips: {
            outdoor: '수영/서핑: 20분마다 덧바르기. 등산: 고도 높을수록 UV 강함',
            reapply: '땀 닦은 후 → 티슈로 유분 제거 → 선스틱 빠르게 덧바르기',
            gear: '모자, 선글라스는 기본. UV차단 의류도 고려'
        }
    },

    'calming': {
        icon: '💧',
        name: '진정 전문가',
        tagline: '사후 케어의 달인',
        description: '자외선에 민감하지만 예방보다 진정 케어에 집중하는 당신! 실내 생활이 많고 피부 회복을 중요시합니다.',

        problems: [
            { emoji: '⚠️', text: '예방 케어 부족으로 누적 손상' },
            { emoji: '🔥', text: '자외선 노출 후 열감/붉어짐' },
            { emoji: '💰', text: '진정 제품 의존도 높아 비용 증가' }
        ],

        routine: {
            morning: [
                '진정 토너로 피부 정리',
                '가벼운 수분 크림',
                '선크림 SPF30 (외출 시 필수)',
                '⭐ 예방이 최고의 진정!'
            ],
            daytime: [
                '외출 시 선크림 필수',
                '자외선 강한 시간대(11-15시) 실내 권장',
                '불가피한 외출: 양산/모자 필수',
                '노출 후 즉시 진정 미스트'
            ],
            evening: [
                '저자극 클렌저로 부드럽게',
                '냉장 보관한 진정 토너 듬뿍',
                '병풀/알로에 진정 크림',
                '붉어진 부위: 냉찜질 10분 + 진정팩'
            ]
        },

        products: {
            essential: [
                { name: '진정 토너', detail: '병풀/녹차/어성초 추출물', price: '1.5-2.5만원' },
                { name: '알로에 진정 젤', detail: '99% 알로에, 냉장 보관', price: '5천-1만원' },
                { name: '기초 선크림', detail: 'SPF30, 저자극 무기차차', price: '1-1.5만원' }
            ],
            optional: [
                { name: '진정 마스크팩', detail: '시트형, 주 3-4회', price: '개당 1-2천원' },
                { name: '진정 미스트', detail: '즉각 쿨링, 수시로 사용', price: '1-1.5만원' }
            ],
            advanced: [
                { name: '재생 크림', detail: '판테놀/마데카소사이드', price: '3-4만원' },
                { name: '진정 앰플', detail: '고농축 진정 성분', price: '3-5만원' }
            ]
        },

        myths: [
            { wrong: '진정만 잘하면 돼', right: '예방이 90%! 진정은 보조 수단' },
            { wrong: '실내는 안전해', right: '창가 UV-A 누적이 문제. 예방 필수' },
            { wrong: '붉어진 후 바로 영양크림', right: '진정 먼저! 회복 후 영양 공급' }
        ],

        tips: {
            prevention: '진정보다 중요한 것은 예방! 선크림을 습관화하세요',
            emergency: 'UV 노출 후: 찬물 세안 → 냉장 토너 → 진정 젤 → 냉찜질',
            chronic: '만성적 붉어짐은 피부과 상담. 혈관 레이저 고려'
        }
    },

    'active': {
        icon: '🏃',
        name: '액티브 케어러',
        tagline: '자유로운 활동 + 스마트한 관리',
        description: '야외 활동을 즐기면서 피부 진정에 집중하는 당신! 실용적이고 효율적인 케어를 추구합니다.',

        problems: [
            { emoji: '🌞', text: '활동 중 예방 케어 소홀' },
            { emoji: '🔥', text: '활동 후 피부 열감/건조' },
            { emoji: '⏱️', text: '시간 부족으로 케어 스킵' }
        ],

        routine: {
            morning: [
                '간단한 세안 + 토너',
                '선크림 SPF30-50 (빠르게)',
                '외출 많은 날: SPF50+ 권장',
                '5분 루틴으로 끝!'
            ],
            daytime: [
                '활동 전 선크림 덧바르기',
                '휴대용 선스틱 가방에 상비',
                '모자/선글라스 착용',
                '활동 후 즉시 진정 미스트'
            ],
            evening: [
                '샤워 시 꼼꼼히 클렌징',
                '쿨링 진정 제품으로 피부 온도 낮추기',
                '수분크림 듬뿍',
                '피곤한 날: 올인원 크림으로 간편하게'
            ]
        },

        products: {
            essential: [
                { name: '올인원 선크림', detail: '보습+UV차단 동시', price: '1.5-2만원' },
                { name: '휴대용 선스틱', detail: '가방에 상비', price: '1-1.5만원' },
                { name: '쿨링 진정 젤', detail: '활동 후 즉시 사용', price: '1-2만원' }
            ],
            optional: [
                { name: '진정 미스트', detail: '외출 중 수시로', price: '1-1.5만원' },
                { name: '올인원 크림', detail: '밤에 간편하게', price: '2-3만원' }
            ],
            advanced: [
                { name: '워터프루프 선크림', detail: '강한 활동 시', price: '2-3만원' },
                { name: '집중 진정 팩', detail: '주말 집중 케어', price: '2-3만원' }
            ]
        },

        myths: [
            { wrong: '활동 후 진정만 하면 돼', right: '예방이 우선! 선크림은 필수' },
            { wrong: '바쁠 때는 스킵 가능', right: '5분 루틴만으로도 충분. 습관이 중요' },
            { wrong: '진정 제품이 비쌀수록 좋다', right: '성분이 중요. 병풀/알로에면 충분' }
        ],

        tips: {
            quick: '5분 루틴: 토너 → 선크림 → 끝! 저녁은 진정 젤 하나로',
            outdoor: '야외 활동 전 30분: 선크림. 활동 후 즉시: 진정 미스트',
            habit: '가방에 선스틱+진정 미스트 상비. 틈날 때 바르기'
        }
    },

    'smart': {
        icon: '📚',
        name: '알뜰 케어러',
        tagline: '효율적이고 실속 있는 관리',
        description: '피부가 강하고 예방 케어를 실천하는 당신! 실내 생활이 많고 합리적인 선택을 중요시합니다.',

        problems: [
            { emoji: '❓', text: '어떤 제품이 정말 필요한지 모호' },
            { emoji: '💸', text: '불필요한 제품 구매 고민' },
            { emoji: '📖', text: '정보는 많은데 실천은 어려움' }
        ],

        routine: {
            morning: [
                '세안 + 토너 (선택)',
                '선크림 SPF30 (외출 시)',
                '실내 근무: SPF30으로도 충분',
                '미니멀 루틴 완성'
            ],
            daytime: [
                '외출 많은 날만 덧바르기',
                '창가 자리: 선크림 필수',
                '점심 외출: 선스틱 간편하게',
                '필요한 만큼만!'
            ],
            evening: [
                '클렌징 (선크림 사용 시)',
                '토너 (선택)',
                '수분크림 (건조할 때)',
                '주 1-2회: 마스크팩'
            ]
        },

        products: {
            essential: [
                { name: '기본 선크림', detail: 'SPF30, 대용량 가성비', price: '1-1.5만원' },
                { name: '클렌징 폼', detail: '저자극, 대용량', price: '5천-1만원' },
                { name: '수분크림', detail: '기본 보습, 대용량', price: '1-2만원' }
            ],
            optional: [
                { name: '토너', detail: '피부결 정리용', price: '1-1.5만원' },
                { name: '선스틱', detail: '덧바르기용', price: '1만원' }
            ],
            advanced: [
                { name: 'SPF50 선크림', detail: '장시간 외출용', price: '1.5-2만원' },
                { name: '진정 제품', detail: '여름철 필요 시', price: '1-1.5만원' }
            ]
        },

        myths: [
            { wrong: '비싼 제품이 효과 좋아', right: 'SPF 지수가 중요. 가성비 제품도 충분' },
            { wrong: '많은 단계가 필수', right: '선크림+보습만으로도 OK. 미니멀도 좋음' },
            { wrong: '매일 덧바를 필요 없어', right: '외출 많은 날은 덧바르기 권장' }
        ],

        tips: {
            priority: '1순위: 선크림, 2순위: 보습크림, 나머지는 선택',
            budget: '월 2-3만원 예산으로 충분. 대용량 가성비 제품 추천',
            minimal: '아침: 선크림, 저녁: 클렌징+보습. 이것만으로도 80점!'
        }
    },

    'weekend': {
        icon: '🌤️',
        name: '주말 워리어',
        tagline: '평일은 실내, 주말은 야외',
        description: '평일엔 실내 근무, 주말엔 활동적인 당신! 피부가 강하지만 예방 케어로 더 건강하게 유지할 수 있습니다.',

        problems: [
            { emoji: '🔄', text: '평일/주말 케어 루틴 불일치' },
            { emoji: '☀️', text: '주말 집중 노출로 누적 손상' },
            { emoji: '🎒', text: '주말 외출 시 준비 부족' }
        ],

        routine: {
            morning: [
                '평일: 간단히 or 스킵 가능',
                '주말: 선크림 SPF50 필수',
                '야외 활동 30분 전 도포',
                '목, 귀, 팔 등 노출 부위 전체'
            ],
            daytime: [
                '평일: 외출 시만 선크림',
                '주말: 2-3시간마다 덧바르기',
                '모자, 선글라스 챙기기',
                '휴대용 선스틱 가방에'
            ],
            evening: [
                '평일: 간단 클렌징 + 보습',
                '주말: 꼼꼼히 클렌징',
                '진정 제품 (필요 시)',
                '주 1-2회 마스크팩'
            ]
        },

        products: {
            essential: [
                { name: '주말용 선크림', detail: 'SPF50 PA++++, 워터프루프', price: '2-2.5만원' },
                { name: '휴대용 선스틱', detail: '등산/해변 휴대', price: '1-1.5만원' },
                { name: '진정 젤', detail: '주말 활동 후', price: '1-1.5만원' }
            ],
            optional: [
                { name: '평일용 선크림', detail: 'SPF30, 가벼운 제형', price: '1-1.5만원' },
                { name: 'UV차단 의류', detail: '등산복/자전거복', price: '3-5만원' }
            ],
            advanced: [
                { name: 'UV차단 스프레이', detail: '넓은 면적 빠른 도포', price: '1.5-2만원' },
                { name: '집중 진정 팩', detail: '주말 밤 집중 케어', price: '개당 2-3천원' }
            ]
        },

        myths: [
            { wrong: '평일은 안 발라도 돼', right: '실내도 창가는 UV 노출. 외출 시 필수' },
            { wrong: '주말 한 번만 바르면 OK', right: '활동 중 2-3시간마다 덧바르기' },
            { wrong: '피부 강하면 괜찮아', right: '누적 손상은 나중에 나타남. 예방 필수' }
        ],

        tips: {
            weekend: '주말 외출 체크리스트: 선크림, 선스틱, 모자, 선글라스',
            activity: '등산/해변: SPF50+, 수영: 워터프루프, 20분마다 덧바르기',
            prevention: '강한 피부도 20-30대부터 관리하면 40-50대가 다름'
        }
    },

    'relaxed': {
        icon: '😌',
        name: '여유로운 영혼',
        tagline: '느긋하지만 케어는 필요해요',
        description: '피부가 강하고 실내 생활이 많은 당신! 최소한의 케어로도 건강한 피부를 유지할 수 있지만, 장기적 관리도 중요합니다.',

        problems: [
            { emoji: '🤷', text: '케어 필요성을 못 느낌' },
            { emoji: '⚠️', text: '장기적 누적 손상 리스크' },
            { emoji: '📖', text: '어디서부터 시작할지 모름' }
        ],

        routine: {
            morning: [
                '외출 시 선크림 SPF30 (최소한)',
                '5분이면 충분',
                '이것만은 꼭!',
                ''
            ],
            daytime: [
                '창가 자리 피하기',
                '점심 외출: 모자 or 양산',
                '장시간 외출: 선크림 추가',
                '선택이 아닌 필수!'
            ],
            evening: [
                '세안 (선크림 사용 시)',
                '보습크림 (건조할 때)',
                '이정도면 OK',
                '주 1회 마스크팩 권장'
            ]
        },

        products: {
            essential: [
                { name: '초간편 선크림', detail: 'SPF30, 가볍고 빠른 흡수', price: '1-1.5만원' },
                { name: '기본 클렌징', detail: '저자극, 대용량', price: '5천-1만원' }
            ],
            optional: [
                { name: '보습크림', detail: '건조할 때만', price: '1-2만원' },
                { name: '마스크팩', detail: '주 1회 기분 전환', price: '개당 1-2천원' }
            ],
            advanced: [
                { name: '여름용 선크림', detail: 'SPF50, 야외 활동 시', price: '1.5-2만원' },
                { name: '진정 제품', detail: '햇빛 노출 후', price: '1-1.5만원' }
            ]
        },

        myths: [
            { wrong: '피부 강하니까 안 발라도 돼', right: 'UV 누적은 20년 후 나타남. 지금부터 시작!' },
            { wrong: '실내는 완전 안전', right: '창가 UV-A는 계속 들어옴. 최소한의 케어 필요' },
            { wrong: '케어는 나중에 해도 돼', right: '예방이 치료보다 10배 쉬움. 지금이 골든타임' }
        ],

        tips: {
            start: '1단계: 외출 시 선크림만. 2단계: 매일 바르기. 3단계: 보습 추가',
            motivation: '30대까지는 안 보여도, 40대부터 차이 납니다',
            easy: '귀찮으면: 아침 선크림 하나만! 이것만으로도 80% 효과'
        }
    },

    'sunny': {
        icon: '🌞',
        name: '태양의 친구',
        tagline: '자유로운 야외 생활러',
        description: '피부가 강하고 야외 활동을 즐기는 당신! 자연주의 라이프스타일이지만, 장기적 피부 건강을 위한 최소 케어를 권장합니다.',

        problems: [
            { emoji: '☀️', text: '강한 자외선에 장시간 노출' },
            { emoji: '⚠️', text: '당장은 괜찮아도 누적 손상' },
            { emoji: '🎯', text: '케어 동기 부족' }
        ],

        routine: {
            morning: [
                '야외 활동 전 선크림 SPF50 (필수)',
                '귀찮아도 이것만은!',
                '5분 투자로 10년 후가 달라짐',
                ''
            ],
            daytime: [
                '장시간 야외: 2-3시간마다 덧바르기',
                '모자/선글라스는 기본',
                '한낮(11-15시)은 가능하면 피하기',
                '그늘에서도 UV는 들어옴'
            ],
            evening: [
                '샤워 시 꼼꼼히 클렌징',
                '열감 있으면 진정 제품',
                '보습크림 (선택)',
                '주 1-2회 진정 팩 권장'
            ]
        },

        products: {
            essential: [
                { name: '강력 선크림', detail: 'SPF50+ PA++++, 워터프루프', price: '2-3만원' },
                { name: '휴대용 선스틱', detail: '야외 활동 필수템', price: '1.5-2만원' }
            ],
            optional: [
                { name: '진정 젤', detail: '활동 후 피부 진정', price: '1-1.5만원' },
                { name: 'UV차단 스프레이', detail: '몸 전체 빠른 도포', price: '1.5-2만원' }
            ],
            advanced: [
                { name: 'UV차단 의류', detail: 'UPF50+ 기능성', price: '3-10만원' },
                { name: '재생 크림', detail: '손상 피부 회복', price: '3-5만원' }
            ]
        },

        myths: [
            { wrong: '건강한 피부라 걱정 없어', right: '피부암 리스크, 누적 광노화는 누구에게나' },
            { wrong: '선탠이 건강미', right: '선탠 = 피부 손상 신호. 보호 반응일 뿐' },
            { wrong: '자연스러운 게 좋아', right: '자연에는 UV도 포함. 최소한의 방어 필요' }
        ],

        tips: {
            critical: '⚠️ 장시간 야외 활동자는 피부암 검진 권장 (연 1회)',
            protection: '선크림 + 모자 + 선글라스 + UV차단 의류 = 완벽 방어',
            mindset: '케어 = 나약함 (X), 케어 = 스마트함 (O). 프로 운동선수도 합니다'
        }
    }
};

// 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const score = urlParams.get('score') || 0;

    if (!type || !uvTypes[type]) {
        // 타입이 없으면 메인으로
        window.location.href = 'index.html';
        return;
    }

    displayResults(type, score);
});

// 결과 표시
function displayResults(type, score) {
    const data = uvTypes[type];

    // 타입 정보
    document.getElementById('type-icon').textContent = data.icon;
    document.getElementById('type-name').textContent = data.name;
    document.getElementById('type-tagline').textContent = data.tagline;
    document.getElementById('type-description').textContent = data.description;
    document.getElementById('uv-score').textContent = score;

    // 문제점
    const problemsHtml = data.problems.map(p =>
        `<div class="problem-item">
            <span class="problem-emoji">${p.emoji}</span>
            <span>${p.text}</span>
        </div>`
    ).join('');
    document.getElementById('problems-list').innerHTML = problemsHtml;

    // 케어 루틴
    document.getElementById('routine-morning').innerHTML = data.routine.morning.map(item => `<li>${item}</li>`).join('');
    document.getElementById('routine-daytime').innerHTML = data.routine.daytime.map(item => `<li>${item}</li>`).join('');
    document.getElementById('routine-evening').innerHTML = data.routine.evening.map(item => `<li>${item}</li>`).join('');

    // 제품 추천
    document.getElementById('products-essential').innerHTML = data.products.essential.map(p =>
        `<li><strong>${p.name}</strong>: ${p.detail} (${p.price})</li>`
    ).join('');
    document.getElementById('products-optional').innerHTML = data.products.optional.map(p =>
        `<li><strong>${p.name}</strong>: ${p.detail} (${p.price})</li>`
    ).join('');
    if (data.products.advanced) {
        document.getElementById('products-advanced').innerHTML = data.products.advanced.map(p =>
            `<li><strong>${p.name}</strong>: ${p.detail} (${p.price})</li>`
        ).join('');
    }

    // UV 상식 바로잡기
    document.getElementById('myths-list').innerHTML = data.myths.map(m =>
        `<div class="myth-item">
            <div class="myth-wrong">❌ ${m.wrong}</div>
            <div class="myth-right">✅ ${m.right}</div>
        </div>`
    ).join('');

    // 상황별 팁
    const tipsHtml = Object.entries(data.tips).map(([key, value]) =>
        `<div class="tip-item"><strong>💡 </strong>${value}</div>`
    ).join('');
    document.getElementById('tips-list').innerHTML = tipsHtml;

    // 메타 태그 업데이트
    updateMetaTags(type, data, score);
}

// 메타 태그 업데이트 (카카오톡 공유용)
function updateMetaTags(type, data, score) {
    document.title = `${data.name} - UV 케어 타입 테스트`;

    // Open Graph 태그
    updateOrCreateMeta('og:title', `나는 "${data.name}"! UV 케어 점수 ${score}점`);
    updateOrCreateMeta('og:description', data.tagline + ' - ' + data.description.substring(0, 100));
    updateOrCreateMeta('og:url', window.location.href);
    updateOrCreateMeta('og:image', `${window.location.origin}/images/${type}.jpg`);
    updateOrCreateMeta('og:type', 'website');

    // Twitter Card
    updateOrCreateMeta('twitter:card', 'summary_large_image', 'name');
    updateOrCreateMeta('twitter:title', `나는 "${data.name}"!`, 'name');
    updateOrCreateMeta('twitter:description', data.tagline, 'name');
}

function updateOrCreateMeta(property, content, attrName = 'property') {
    let meta = document.querySelector(`meta[${attrName}="${property}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, property);
        document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
}

// 카카오톡 공유
function shareKakao() {
    const type = new URLSearchParams(window.location.search).get('type');
    const score = new URLSearchParams(window.location.search).get('score');
    const data = uvTypes[type];

    if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: `나는 "${data.name}"!`,
                description: `UV 케어 점수 ${score}점 📊\n${data.tagline}`,
                imageUrl: `${window.location.origin}/images/${type}.jpg`,
                link: {
                    mobileWebUrl: window.location.origin,
                    webUrl: window.location.origin
                }
            },
            buttons: [
                {
                    title: '나도 테스트하기',
                    link: {
                        mobileWebUrl: window.location.origin,
                        webUrl: window.location.origin
                    }
                }
            ]
        });
    } else {
        alert('카카오톡 공유 기능을 사용할 수 없습니다.\n링크 복사 기능을 이용해주세요!');
        copyLink();
    }
}

// 트위터 공유
function shareTwitter() {
    const type = new URLSearchParams(window.location.search).get('type');
    const score = new URLSearchParams(window.location.search).get('score');
    const data = uvTypes[type];
    const text = `나의 UV 케어 타입은 "${data.name}"! (점수: ${score}점)\n당신의 타입은?`;
    const url = window.location.origin;

    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

// 페이스북 공유
function shareFacebook() {
    const url = window.location.origin;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

// 링크 복사
function copyLink() {
    const url = window.location.origin;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast('링크가 복사되었습니다! 📋');
        });
    } else {
        // 폴백
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('링크가 복사되었습니다! 📋');
    }
}

// 토스트 메시지
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 30px;
        border-radius: 25px;
        font-size: 1em;
        z-index: 10000;
        animation: fadeInOut 2s ease;
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        document.body.removeChild(toast);
    }, 2000);
}

// CSS 애니메이션
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0%, 100% { opacity: 0; }
        10%, 90% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// 결과 이미지 다운로드 (선택 기능)
function downloadResult() {
    alert('스크린샷을 찍어 저장해주세요!\n\n(고급 기능: html2canvas 라이브러리로 구현 가능)');
}

// 이메일 구독
async function subscribeEmail() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();
    const message = document.getElementById('subscribe-message');

    if (!email) {
        message.textContent = '이메일을 입력해주세요.';
        message.style.color = '#e74c3c';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = '올바른 이메일 형식이 아닙니다.';
        message.style.color = '#e74c3c';
        return;
    }

    try {
        const type = new URLSearchParams(window.location.search).get('type');
        const score = new URLSearchParams(window.location.search).get('score');

        const subscribeData = {
            timestamp: new Date().toISOString(),
            email: email,
            uvType: type,
            score: score,
            action: 'subscribe'
        };

        if (typeof GOOGLE_SHEETS_URL !== 'undefined' && GOOGLE_SHEETS_URL) {
            await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subscribeData)
            });
        }

        message.textContent = '✅ 알림 신청이 완료되었습니다!';
        message.style.color = '#27ae60';
        emailInput.value = '';

        showToast('알림 신청 완료! 이메일을 확인해주세요.');
    } catch (error) {
        console.error('구독 실패:', error);
        message.textContent = '알림 신청 중 오류가 발생했습니다.';
        message.style.color = '#e74c3c';
    }
}
