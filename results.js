// UV 케어 타입 데이터 (동물 캐릭터 기반 9개 타입)
const uvTypes = {
    'desert_fox': {
        icon: '🦊',
        animal: '사막여우',
        name: '사막여우',
        nickname: '선크림 여우',
        tagline: '극한의 자외선 환경에서도 살아남는 생존 전문가',
        character_intro: '당신은 사막여우처럼 뜨거운 햇빛 속에서도 자신을 완벽하게 보호할 줄 아는 UV 케어의 달인입니다.',
        description: `🦊 사막여우는 낮 기온 50도가 넘는 극한 환경에서도 살아남습니다. 비결은? 완벽한 적응 전략이죠. 당신도 마찬가지예요!

피부가 자외선에 민감하게 반응하지만, 사막여우처럼 야외 활동을 포기하지 않습니다. 대신 완벽한 방어 시스템을 갖췄죠. 선크림 재도포는 기본, 모자·선글라스·양산까지 풀 세트 장착! 햇빛이 강한 시간대를 피하고, 그늘을 전략적으로 활용하는 당신은 진정한 UV 서바이벌 전문가입니다.

🌟 사막여우의 특징: SPF/PA 지수, 재도포 타이밍, 날씨별 전략을 모두 꿰뚫고 있어요. 단순히 바르는 게 아니라 '언제, 어떻게, 얼마나'를 정확히 아는 전문가형 케어러죠. 활동적인 라이프스타일 속에서도 피부 보호를 최우선으로 두는 높은 자기관리 능력이 돋보입니다.

⚠️ 사막여우의 주의점: 완벽주의가 때로는 스트레스가 될 수 있어요. UV 지수 실시간 체크, 30분마다 재도포 강박... 이러다 UV 케어가 일이 될 수 있어요. 80% 완성도로 꾸준히 하는 게 100% 완벽을 가끔 하는 것보다 낫답니다!

💎 사막여우의 미래: 지금 하는 케어만 유지해도 10년 후 피부는 동년배 상위 5% 안에 들 거예요. 너무 예민하게 굴지 말고, 지금처럼만 하세요!`,

        routine: {
            morning: [
                '세안 후 토너로 피부 진정 및 결 정리',
                '가벼운 수분 에센스 또는 젤 크림',
                '선크림 SPF50+ PA++++ (외출 30분 전, 넉넉하게)',
                '목, 귀, 손등, 팔 등 노출 부위 모두 꼼꼼히'
            ],
            daytime: [
                '2-3시간마다 선크림 재도포 (활동 강도에 따라 조정)',
                '땀을 많이 흘렸다면 즉시 덧바르기',
                '모자, 선글라스, 양산 등 물리적 차단 병행',
                '실외 활동 시 그늘 활용, 한낮(11-15시) 피하기'
            ],
            evening: [
                '이중 클렌징으로 선크림 완전히 제거',
                '진정 토너로 피부 안정 및 수분 공급',
                '수분 크림으로 보습 마무리',
                '주 2-3회 진정 또는 수분 마스크팩'
            ]
        },

        products: {
            essential: [
                { name: '고지수 데일리 선크림', detail: 'SPF50+ PA++++, 논코메도제닉, 백탁 없는 제형' },
                { name: '워터프루프 선스틱', detail: '야외 활동용, 땀과 물에 강함, 휴대 간편' },
                { name: '진정 토너', detail: '병풀/녹차/알로에 추출물 함유, 대용량' }
            ],
            optional: [
                { name: '선크림 쿠션/미스트', detail: '메이크업 위 덧바르기용' },
                { name: 'UV 차단 립밤', detail: 'SPF15 이상, 입술 보호' },
                { name: '진정 미스트', detail: '외출 중 즉각 진정 및 수분 보충' }
            ],
            advanced: [
                { name: '항산화 세럼', detail: '비타민C/E, 나이아신아마이드 함유, 광노화 예방' },
                { name: 'UV 차단 기능성 의류', detail: 'UPF50+ 등산복/러닝웨어' }
            ]
        },

        myths: [
            { wrong: '실내에서는 선크림 불필요', right: '창가 1-2m 이내는 UV-A가 50% 이상 침투! 실내도 기본 차단 필수' },
            { wrong: '선크림 한 번 바르면 하루 종일 OK', right: '효과는 2-3시간. 야외 활동 시 반드시 재도포' },
            { wrong: '비싼 제품이 무조건 좋다', right: 'SPF/PA 지수와 성분이 중요. 본인 피부에 맞는 제형 선택이 핵심' }
        ],

        tips: {
            outdoor: '등산/해변: 고도 높을수록, 수면 반사가 있을수록 UV 강도 증가. 30분마다 재도포 권장',
            reapply: '메이크업 위 재도포: 티슈로 유분 제거 → 쿠션 또는 스틱으로 가볍게',
            efficiency: '과도한 걱정보다는 루틴화가 답. 아침/점심/오후 3회 도포면 충분합니다',
            winter: '겨울에도 UV는 존재. 특히 설산은 반사로 2배 강함'
        }
    },

    'shadow_panda': {
        icon: '🐼',
        animal: '그늘판다',
        name: '그늘판다',
        nickname: '인도어 마스터',
        tagline: '실내에서도 빈틈없이, 피부는 죽처럼 부드럽게',
        character_intro: '당신은 판다처럼 그늘을 사랑하고, 실내 UV까지 철저히 차단하는 똑똑한 케어러입니다.',
        description: `🐼 판다는 대나무 숲 그늘에서 95%의 시간을 보냅니다. 햇빛? 필요할 때만 잠깐! 당신도 인도어파지만, UV 차단만큼은 프로급이에요.

피부가 자외선에 민감해서 조금만 햇빛 쐬도 빨개지는 당신. 하지만 이건 약점이 아니라 조기경보 시스템이에요! 작은 신호에도 빠르게 반응해서 피부를 지키는 똑똑한 타입이죠. "실내는 안전해"라고 방심하는 사람들과 달리, 당신은 창가 UV도 철저히 차단합니다.

🌟 그늘판다의 특징: UV-A/UV-B 차이, SPF/PA 의미를 정확히 알고, 실내용/외출용 선크림을 구분해서 씁니다. 워터프루프 같은 무거운 제품보다 가볍고 보습력 좋은 데일리 제형을 선호하는 안목파! 매일 아침 선크림은 양치질만큼 당연한 루틴이에요.

⚠️ 그늘판다의 주의점: 실내 케어는 완벽한데, 가끔 있는 야외 활동 대비가 약할 수 있어요. 갑작스런 야외 활동 시 당황하지 않도록 SPF50+ 워터프루프 하나쯤은 비상용으로 준비해두세요!

💎 그늘판다의 미래: 실내 UV 차단을 이렇게 철저히 하는 사람은 드물어요. 10년 후 "어떻게 피부가 그대로지?"라는 질문에 "실내에서도 선크림 발랐거든"이라고 답하게 될 거예요!`,

        routine: {
            morning: [
                '세안 후 진정 토너로 피부 준비',
                '가벼운 수분 크림 또는 에센스',
                '데일리 선크림 SPF30-50 (실내용, 편안한 제형)',
                '창가 좌석이라면 SPF50+ 권장'
            ],
            daytime: [
                '외출 전 선크림 재확인 및 보충',
                '장시간 외출 시 휴대용 선스틱 지참',
                '실내 복귀 후 진정 미스트로 피부 안정',
                '창가에서 장시간 작업 시 중간 재도포 고려'
            ],
            evening: [
                '클렌징으로 선크림 및 미세먼지 제거',
                '진정 토너 듬뿍 (냉장 보관하면 더 좋음)',
                '수분 크림으로 보습 마무리',
                '주 2-3회 진정 또는 영양 마스크팩'
            ]
        },

        products: {
            essential: [
                { name: '데일리 선크림', detail: 'SPF30-50 PA+++, 백탁 없음, 보습 기능' },
                { name: '휴대용 선스틱', detail: '외출 시 덧바르기용, 메이크업 위 사용 가능' },
                { name: '진정 토너', detail: '병풀/녹차 추출물, 대용량, 넉넉하게 사용' }
            ],
            optional: [
                { name: '선크림 쿠션', detail: '간편한 재도포, 톤업 효과' },
                { name: '진정 미스트', detail: '실내 건조 환경에서 수시로 사용' },
                { name: '야외용 고지수 선크림', detail: 'SPF50+ PA++++, 주말 외출용' }
            ],
            advanced: [
                { name: '항산화 세럼', detail: '비타민C 또는 나이아신아마이드, 아침 선크림 전 사용' },
                { name: '진정 재생 크림', detail: '판테놀/마데카소사이드, 민감 피부 진정' }
            ]
        },

        myths: [
            { wrong: '실내는 안전하니까 선크림 안 발라도 돼', right: '창문 UV-A는 50% 통과! 실내도 기본 차단 필수' },
            { wrong: '외출 안 하는 날은 스킵', right: '베란다, 창가 작업, 잠깐의 외출도 UV 노출. 매일 바르기' },
            { wrong: '민감 피부는 선크림이 자극적', right: '무기 자외선 차단제(징크옥사이드/티타늄옥사이드)는 저자극' }
        ],

        tips: {
            indoor: '실내 근무자도 창가 1-2m는 주의 구역. 블라인드나 UV 차단 필름 활용',
            product: '무기 차단제는 백탁, 유기 차단제는 흡수 방식. 본인 피부에 맞는 것 선택',
            consistency: '완벽한 하루보다 꾸준한 80점이 낫습니다. 루틴화가 핵심',
            seasons: '겨울/흐린 날도 UV는 80% 이상 존재. 사계절 필수'
        }
    },

    'cooling_dolphin': {
        icon: '🐬',
        animal: '애프터썬 돌고래',
        name: '애프터썬 돌고래',
        nickname: '쿨링 마스터',
        tagline: '물놀이 후엔 쿨링! 회복의 달인',
        character_intro: '당신은 돌고래처럼 활동적이지만, 수분과 쿨링으로 빠르게 회복하는 애프터케어 전문가입니다.',
        description: `🐬 돌고래는 하루 종일 햇빛 아래서 활동하지만, 물속에서 체온을 식히고 빠르게 회복합니다. 당신도 마찬가지! 운동·등산·해변을 즐기지만, 애프터케어만큼은 프로급이에요.

피부가 민감해서 야외 활동 후 얼굴이 빨갛게 달아오르는 경험, 자주 하시죠? 하지만 당신은 이미 알고 있어요. 냉장고에 쟁여둔 알로에 젤, 쿨링 미스트, 진정 시트팩... 집에 돌아오면 속도전이 시작됩니다! 10분 안에 피부 온도를 낮추는 당신의 솜씨는 예술이에요.

🌟 애프터썬 돌고래의 특징: 즉각 대응 능력이 뛰어나요. 피부가 붉어지는 걸 빠르게 캐치하고, 냉찜질→진정 토너→쿨링 젤로 이어지는 황금 루틴을 갖췄죠. 땀 흘린 후 샤워하면서 몸까지 꼼꼼히 케어하는 성실함도 있어요!

⚠️ 돌고래의 함정: 애프터케어만 잘하면 괜찮다고 생각하지만, 진정 케어는 '이미 탄 피부를 달래는 것'일 뿐이에요. UV 손상은 누적됩니다! 활동 전 워터프루프 선크림 + 활동 중 재도포가 진짜 게임체인저예요.

💎 돌고래의 업그레이드: 애프터케어 실력에 예방 케어만 더하면 완벽! 활동 30분 전 선크림 충분히 바르고, 1-2시간마다 선스틱으로 재도포하세요. 그러면 집에 와서 진정 케어 부담도 확 줄어들 거예요!`,

        routine: {
            morning: [
                '가벼운 세안 후 진정 토너',
                '워터프루프 선크림 SPF50+ PA++++ (활동 30분 전)',
                '땀 많이 흘리는 부위(이마, 코, 목) 충분히',
                '귀, 목뒤, 팔 등 노출 부위 빠짐없이'
            ],
            daytime: [
                '활동 중 1-2시간마다 선스틱으로 재도포',
                '땀 흘렸다면 티슈로 닦고 즉시 덧바르기',
                '모자, 선글라스, 양산 등 물리적 차단 병행',
                '활동 직후 진정 미스트로 피부 온도 낮추기'
            ],
            evening: [
                '샤워 시 꼼꼼히 클렌징 (얼굴+몸)',
                '냉장 보관한 진정 토너 듬뿍',
                '알로에 또는 병풀 진정 젤 충분히',
                '붉어진 부위 냉찜질 10분 + 진정팩'
            ]
        },

        products: {
            essential: [
                { name: '워터프루프 선크림', detail: 'SPF50+ PA++++, 땀/물에 강함, 끈적임 없는 제형' },
                { name: '스포츠 선스틱', detail: '휴대 간편, 빠른 도포, 활동 중 재도포용' },
                { name: '쿨링 진정 젤', detail: '99% 알로에 또는 병풀 추출물, 대용량, 냉장 보관' }
            ],
            optional: [
                { name: '진정 미스트', detail: '즉각 쿨링, 외출 중 수시로 사용' },
                { name: '진정 마스크팩', detail: '시트형, 활동 후 집중 진정, 주 3-4회' },
                { name: 'UV 차단 스프레이', detail: '몸 전체 빠른 도포, 넓은 면적' }
            ],
            advanced: [
                { name: '재생 크림', detail: '판테놀/마데카소사이드, 손상 피부 회복 촉진' },
                { name: 'UV 차단 기능성 의류', detail: 'UPF50+, 쿨링 기능, 러닝/등산용' }
            ]
        },

        myths: [
            { wrong: '활동 후 진정만 잘하면 괜찮아', right: '예방이 90%! 진정은 손상 완화일 뿐, 누적 손상은 남음' },
            { wrong: '워터프루프 제품은 재도포 불필요', right: '땀, 마찰로 지워짐. 1-2시간마다 재도포 필수' },
            { wrong: '붉어진 즉시 영양크림 바르기', right: '먼저 진정! 냉찜질 → 진정 젤 → 회복 후 영양 공급' }
        ],

        tips: {
            prevention: '⭐ 최고의 진정은 예방! 활동 전 선크림 충분히, 활동 중 재도포',
            emergency: 'UV 노출 후: 찬물 세안 → 냉장 토너 → 쿨링 젤 → 냉찜질 10분',
            hydration: '활동 중 수분 섭취도 중요. 체내 수분이 피부 회복에 영향',
            chronic: '만성적 붉어짐/홍조는 피부과 상담. 혈관 레이저 치료 고려'
        }
    },

    'glass_swan': {
        icon: '🦢',
        animal: '유리백조',
        name: '유리백조',
        nickname: '센서티브 케어러',
        tagline: '도자기처럼 섬세한 피부, 백조처럼 우아한 케어',
        character_intro: '당신은 백조처럼 우아하지만 민감한 피부를 가진, 섬세한 관리가 필요한 타입입니다.',
        description: `🦢 백조는 아름답지만 예민합니다. 작은 자극에도 민감하게 반응하죠. 당신의 피부도 마찬가지예요. 5분만 햇빛 쐬도 따끔거리고, UV뿐 아니라 열·미세먼지·스트레스에도 빨개지는 유리 피부!

하지만 이건 약점이 아니라 '고급 센서'예요. 다른 사람들은 모르게 지나치는 자극을 당신은 즉시 감지하고 대응합니다. 제품 선택도 신중해요. 시카·알로에·녹차 추출물 같은 진정 성분만 쏙쏙 골라 쓰고, 향료·알코올은 철저히 피하죠. 냉장고에는 냉장 토너·진정팩·쿨링 젤이 대기 중!

🌟 유리백조의 특징: 피부 관찰력이 뛰어나요. "어? 오늘 좀 빨개진 것 같은데?" 싶으면 즉시 루틴을 조정하는 유연함이 있죠. 세심한 케어 덕분에 피부 장벽을 지키려고 노력하는 성실파!

⚠️ 백조의 함정: 진정 케어는 완벽한데 예방은 약해요. 자극→진정→자극→진정... 이 반복은 장벽을 더 약하게 만들 수 있어요. 가장 효과적인 진정은? 바로 '예방'! 아예 자극을 받지 않는 거죠.

💎 백조의 레벨업: 매일 아침 저자극 무기 자외선 차단제(징크옥사이드/티타늄옥사이드) + 외출 시 양산/모자! 11-15시는 피하기! 이것만 추가하면 진정 케어 부담이 확 줄고, 피부도 점점 안정될 거예요!`,

        routine: {
            morning: [
                '저자극 클렌저로 부드럽게 세안',
                '진정 토너 듬뿍 (손으로 가볍게 두드리기)',
                '무기 자외선 차단제 SPF30-50 (징크옥사이드/티타늄옥사이드)',
                '외출 시 목, 귀, 손등까지'
            ],
            daytime: [
                '외출 최소화, 특히 11-15시 피하기',
                '불가피한 외출 시 양산, 모자, 마스크 활용',
                '귀가 후 즉시 진정 미스트',
                '창가 자리는 피하거나 선크림 재도포'
            ],
            evening: [
                '저자극 클렌저로 1차 클렌징',
                '미온수로 충분히 헹구기',
                '냉장 보관한 진정 토너 듬뿍',
                '병풀/알로에 진정 크림, 붉은 부위는 냉찜질+진정팩'
            ]
        },

        products: {
            essential: [
                { name: '무기 자외선 차단제', detail: 'SPF30-50, 징크옥사이드/티타늄옥사이드, 무향료' },
                { name: '진정 토너', detail: '병풀/녹차/어성초 추출물, 무알코올, 대용량' },
                { name: '알로에 진정 젤', detail: '99% 알로에, 냉장 보관, 넉넉하게 사용' }
            ],
            optional: [
                { name: '진정 미스트', detail: '즉각 진정, 수시로 사용, 외출 시 휴대' },
                { name: '진정 마스크팩', detail: '시트형 또는 워시오프, 주 3-4회' },
                { name: '저자극 클렌징 워터', detail: '이중 세안 부담스러울 때' }
            ],
            advanced: [
                { name: '재생 크림', detail: '판테놀/마데카소사이드, 장벽 강화' },
                { name: '진정 앰플', detail: '고농축 진정 성분, 민감 시기 집중 케어' }
            ]
        },

        myths: [
            { wrong: '민감 피부는 선크림이 더 자극적', right: '무기 차단제는 저자극. UV 노출이 더 큰 자극' },
            { wrong: '진정만 잘하면 괜찮아', right: '예방이 최고의 진정! 노출 줄이기가 우선' },
            { wrong: '많은 제품 사용이 답', right: '단순한 루틴이 오히려 좋음. 과도한 제품은 역효과' }
            ],

        tips: {
            prevention: '최고의 진정은 예방. 외출 전 선크림 필수, 양산/모자 활용',
            products: '무향료, 무알코올, 무파라벤 제품 선택. 패치 테스트 후 사용',
            barrier: '장벽 강화가 핵심. 각질 제거 최소화, 보습 충분히',
            medical: '만성 민감/홍조는 피부과 상담. 전문 치료 고려'
        }
    },

    'balance_raccoon': {
        icon: '🦝',
        animal: '밸런스 너구리',
        name: '밸런스 너구리',
        nickname: '스마트 케어러',
        tagline: '필요한 만큼만, 똑똑하게! 효율의 달인',
        character_intro: '당신은 너구리처럼 영리하고 적응력이 뛰어난, 합리적인 UV 케어의 달인입니다.',
        description: `🦝 너구리는 영리합니다. 필요한 것만 챙기고, 과하지도 부족하지도 않게 적응하죠. 당신의 UV 케어도 딱 그래요! 극단적이지 않고 균형 잡힌 접근, 바로 "밸런스 너구리"의 스타일입니다.

피부가 super 민감한 건 아니지만, 10년 후 광노화·색소침착이 걱정되긴 해요. 그래서 매일 선크림은 기본으로 바르고, 외출 많은 날엔 재도포도 챙깁니다. 하지만 30분마다 덧바르기? 비싼 앰플 5단계 루틴? 그건 너무 과해요. 심플하고 실용적인 게 최고!

🌟 밸런스 너구리의 특징: 정보력과 판단력이 뛰어나요! UV 케어 기본 지식은 갖췄고, 마케팅에 현혹 안 돼요. "실내 주로 있으니까 SPF30이면 충분, 주말 등산용으로 SPF50+ 하나 더!" 이런 식으로 필요에 딱 맞게 준비하는 똑똑함! 가성비도 중시하고, 최소 제품으로 최대 효과 내는 미니멀리스트죠.

⚠️ 너구리의 함정: 없어요! 진짜로요. 당신의 접근이 가장 지속 가능해요. 완벽주의자들은 2주 하다 지치지만, 당신은 80점 케어를 10년 하잖아요. 그게 이기는 거예요!

💎 너구리의 미래: 지금처럼만 하세요! 매일 80점 케어를 루틴화하는 것만으로도 10년 후 피부는 동년배 상위 20% 안에 들 거예요. 꾸준함이 완벽함을 이깁니다!`,

        routine: {
            morning: [
                '세안 + 토너 (선택사항)',
                '데일리 선크림 SPF30-50',
                '외출 많은 날은 SPF50 권장',
                '미니멀하게, 5분 이내 완료'
            ],
            daytime: [
                '실내 근무: 추가 도포 불필요',
                '외출 많은 날: 점심 후 한 번 재도포',
                '장시간 야외: 휴대용 선스틱 활용',
                '창가 좌석: 중간 한 번 덧바르기'
            ],
            evening: [
                '클렌징 (선크림 사용 시 필수)',
                '토너 (선택)',
                '수분크림 (건조할 때)',
                '주 1-2회 마스크팩으로 집중 케어'
            ]
        },

        products: {
            essential: [
                { name: '데일리 선크림', detail: 'SPF30-50, 대용량 가성비 제품, 백탁 없음' },
                { name: '클렌징 폼', detail: '저자극, 대용량, 선크림 제거용' },
                { name: '기본 수분크림', detail: '보습 기능, 대용량' }
            ],
            optional: [
                { name: '토너', detail: '피부결 정리, 선택사항' },
                { name: '휴대용 선스틱', detail: '외출 많은 날 덧바르기용' },
                { name: '야외용 고지수 선크림', detail: 'SPF50+, 주말 야외 활동용' }
            ],
            advanced: [
                { name: '항산화 세럼', detail: '비타민C 또는 나이아신아마이드, 광노화 예방' },
                { name: '진정 제품', detail: '여름철 또는 필요 시만' }
            ]
        },

        myths: [
            { wrong: '비싼 제품이 효과 좋다', right: 'SPF/PA 지수가 중요. 가성비 제품도 효과 동일' },
            { wrong: '많은 단계가 필수', right: '선크림+보습 기본만으로도 충분. 미니멀도 OK' },
            { wrong: '실내는 선크림 불필요', right: '창가 UV, 잠깐의 외출 등 생활 UV 존재. 매일 바르기' }
        ],

        tips: {
            priority: '1순위: 선크림, 2순위: 클렌징+보습. 나머지는 본인 선택',
            budget: '월 2-3만원 예산 충분. 대용량 제품이 가성비 좋음',
            minimal: '아침: 선크림, 저녁: 클렌징+보습. 이것만으로도 80점',
            consistency: '완벽한 하루보다 꾸준한 80점. 루틴화가 핵심'
        }
    },

    'action_cheetah': {
        icon: '🐆',
        animal: '액션 치타',
        name: '액션 치타',
        nickname: '운동선수형',
        tagline: '달리고, 땀 흘리고, 빠르게 회복!',
        character_intro: '당신은 치타처럼 빠르고 활동적이며, 실용적인 UV 케어로 피부를 지키는 액션파입니다.',
        description: `🐆 치타는 빠릅니다! 달리고, 사냥하고, 쉬고. 복잡한 건 싫어해요. 당신도 마찬가지! 운동·취미·친구 만남으로 바쁜 액션파라 5분 이상 스킨케어는 못 해요. 하지만 UV 관리는 해야 하잖아요?

그래서 당신의 전략은 "빠르고 실용적으로"예요! 10단계 루틴? 아니 고맙습니다. 선크림 바르고, 가방에 선스틱 하나 챙기고, 운동 후 쿨링 젤로 쓱 바르면 끝! 이론보다는 실제로 효과 있는 것만 쓰는 실용주의자죠.

🌟 액션 치타의 특징: 실행력이 장난 아니에요. 가방에 항상 선스틱·진정 미스트 대기 중! 활동 전후로 빠르게 케어하는 요령도 터득했고요. 피부 민감도가 중간이라 조금 방심해도 크게 문제는 없지만, 그래도 기본은 지키는 성실파!

⚠️ 치타의 주의점: 속도만 믿고 예방을 소홀히 하면 위험해요. 활동 후 쿨링만 하면 괜찮다고 생각하지만, UV 손상은 누적됩니다! 활동 전 워터프루프 선크림 + 활동 중 간단 재도포만 추가하면 완벽!

💎 치타의 업그레이드: 가방에 선스틱 하나 넣어두고 생각날 때마다 쓱 바르기! 이것만 습관화하면 지금의 빠른 루틴 유지하면서도 10년 후 피부가 확 달라질 거예요!`,

        routine: {
            morning: [
                '간단한 세안 + 토너',
                '선크림 SPF30-50 빠르게',
                '활동 많은 날: 워터프루프 제품',
                '5분 루틴으로 완료!'
            ],
            daytime: [
                '활동 전 선스틱으로 추가 도포',
                '모자, 선글라스 착용',
                '땀 흘렸다면 티슈로 닦고 재도포',
                '활동 후 진정 미스트로 쿨링'
            ],
            evening: [
                '샤워 시 꼼꼼히 클렌징',
                '쿨링 진정 젤로 피부 온도 낮추기',
                '수분크림 듬뿍',
                '피곤한 날: 올인원 제품으로 간편하게'
            ]
        },

        products: {
            essential: [
                { name: '워터프루프 선크림', detail: 'SPF50 PA+++, 땀에 강함, 끈적임 없음' },
                { name: '휴대용 선스틱', detail: '가방에 상비, 빠른 재도포' },
                { name: '쿨링 진정 젤', detail: '활동 후 즉시 사용, 대용량' }
            ],
            optional: [
                { name: '진정 미스트', detail: '외출 중 수시로, 쿨링 효과' },
                { name: '올인원 크림', detail: '바쁜 저녁 간편 케어' },
                { name: 'UV 차단 스프레이', detail: '몸 전체 빠른 도포' }
            ],
            advanced: [
                { name: 'UV 차단 기능성 의류', detail: 'UPF50+, 러닝/등산용' },
                { name: '집중 진정 팩', detail: '주말 집중 케어' }
            ]
        },

        myths: [
            { wrong: '활동 후 진정만 하면 돼', right: '예방이 우선! 선크림은 활동 전 필수' },
            { wrong: '바쁠 때는 스킵 가능', right: '5분 루틴만으로도 충분. 습관이 중요' },
            { wrong: '워터프루프는 재도포 불필요', right: '땀, 마찰로 지워짐. 중간에 한 번은 덧바르기' }
        ],

        tips: {
            quick: '5분 루틴: 토너 → 선크림 → 끝! 저녁은 진정 젤 하나로',
            outdoor: '야외 활동 30분 전: 선크림. 활동 중: 선스틱. 활동 후: 진정 미스트',
            habit: '가방에 선스틱+진정 미스트 상비. 신호 대기, 휴식 시간에 바르기',
            efficiency: '완벽보다 꾸준함. 80점 루틴을 매일 하는 게 답'
        }
    },

    'sun_eagle': {
        icon: '🦅',
        animal: '태양독수리',
        name: '태양독수리',
        nickname: '프리덤 워리어',
        tagline: '자외선? 그게 뭔데! 하늘을 나는 자유로운 영혼',
        character_intro: '당신은 독수리처럼 태양 가까이 날아다니지만, UV 케어는 낯선 자유로운 아웃도어 러버입니다.',
        description: `🦅 독수리는 태양에 가장 가까이 나는 새입니다. 겁이 없죠. 당신도 마찬가지! 등산·서핑·러닝·캠핑... 야외가 집이에요. 선크림? 번거러워요. 선탠은 건강미라고 생각하고, 피부가 튼튼해서 당장은 아무 문제 없어 보여요.

BUT! 여기 충격적인 사실이 있어요. 피부가 강하다는 건 "지금 당장 안 아프다"는 뜻일 뿐, UV 손상은 똑같이 쌓이고 있어요. 아니, 더 위험해요! 야외 활동을 많이 하니까 일반인보다 몇 배 많은 자외선을 받고 있거든요. 광노화·색소침착·피부암 리스크가 현재 레드존입니다!

⚠️ 독수리의 현실: 20-30대에는 재생력이 좋아서 괜찮아 보여요. 하지만 40대 이후? 누적 손상이 한꺼번에 폭발합니다! 깊은 주름·탄력 저하·기미·검버섯이 급속도로 증가하고, 한 번 생기면 되돌릴 수 없어요. "예방 5분 vs 치료 5년"이에요!

🔥 독수리야, 들어봐: 자연을 즐기는 건 멋져요! 하지만 똑똑하게 즐겨야죠. 활동 전 SPF50+ 선크림 5분, 모자·선글라스 착용! 이것만으로도 10년 후가 완전히 달라져요. 자유로운 영혼은 좋지만, 40대에 후회하는 영혼은 되지 마세요!

💎 독수리의 업그레이드: 지금부터라도 시작하세요. 야외 활동 = 선크림 세트로 생각하기! 복잡하지 않아요. 5분 투자로 평생 가는 피부를 지킬 수 있어요!`,

        routine: {
            morning: [
                '야외 활동 전 선크림 SPF50+ PA++++ (필수)',
                '귀찮아도 이것만은! 5분 투자로 10년 후가 달라짐',
                '얼굴, 목, 귀, 팔, 다리 등 노출 부위 모두',
                ''
            ],
            daytime: [
                '장시간 야외: 2-3시간마다 선스틱으로 재도포',
                '모자, 선글라스는 기본 (패션 아이템으로도 좋음)',
                '한낮(11-15시)은 가능하면 피하기',
                '수영/서핑: 20-30분마다 재도포'
            ],
            evening: [
                '샤워 시 꼼꼼히 클렌징 (얼굴+몸)',
                '열감 있으면 진정 제품 사용',
                '보습크림 (선택)',
                '주 1-2회 진정팩 권장'
            ]
        },

        products: {
            essential: [
                { name: '강력 선크림', detail: 'SPF50+ PA++++, 워터프루프, 대용량' },
                { name: '휴대용 선스틱', detail: '야외 활동 필수템, 재도포용' }
            ],
            optional: [
                { name: 'UV 차단 스프레이', detail: '몸 전체 빠른 도포, 넓은 면적' },
                { name: '진정 젤', detail: '활동 후 피부 진정' },
                { name: '진정 마스크팩', detail: '주말 집중 케어' }
            ],
            advanced: [
                { name: 'UV 차단 기능성 의류', detail: 'UPF50+, 쿨링 기능, 등산/러닝/서핑용' },
                { name: '재생 크림', detail: '손상 피부 회복, 야간 사용' }
            ]
        },

        myths: [
            { wrong: '건강한 피부라 걱정 없어', right: '피부암, 광노화는 누구에게나. 누적 손상은 평등함' },
            { wrong: '선탠이 건강미', right: '선탠 = 피부 손상 신호. 방어 반응일 뿐' },
            { wrong: '자연스러운 게 좋아', right: '자연에는 UV도 포함. 스마트한 방어 필요' }
        ],

        tips: {
            critical: '⚠️ 장시간 야외 활동자는 피부과 검진 권장 (연 1회, 피부암 조기 발견)',
            protection: '선크림 + 모자 + 선글라스 + UV차단 의류 = 완벽 방어',
            mindset: '케어 = 나약함 (X), 케어 = 스마트함 (O). 프로 운동선수도 함',
            start: '1단계: 야외 활동 시만 선크림. 2단계: 모자/선글라스 추가. 습관화가 핵심'
        }
    },

    'indoor_cat': {
        icon: '🐱',
        animal: '도시냥',
        name: '도시냥',
        nickname: '인도어 캣',
        tagline: '밖? 난 집이 좋아. 창가만 조심하면 돼',
        character_intro: '당신은 고양이처럼 실내를 사랑하고, UV 노출이 적지만 최소 케어는 필요한 타입입니다.',
        description: `🐱 고양이는 집 안이 최고예요. 창가에서 햇빛 쬐며 낮잠 자고, 밖은? 별로요. 당신도 인도어파! 실내 근무·배달음식·넷플릭스... 야외 활동은 편의점 다녀오는 게 전부죠. 피부도 튼튼해서 선크림? 필요 없다고 생각해요.

하지만 잠깐! 창가에서 낮잠 자는 고양이도 UV 맞는 건 마찬가지예요! 유리창은 UV-A를 50% 이상 통과시킵니다. 점심 외출 10분, 출퇴근 20분, 창가 좌석 3시간... 매일 조금씩 쌓이는 UV는 20년 후 한꺼번에 터져요!

⚠️ 도시냥의 함정: 20-30대엔 괜찮아 보여요. 재생력이 좋으니까! 하지만 40대 이후? 갑자기 주름·기미·탄력 저하가 폭탄처럼 터집니다. "나 선크림 안 발랐는데 괜찮은데?" ← 이건 지금 얘기고, 10년 후엔 다른 얘기예요!

💡 도시냥의 똑똑한 선택: 복잡한 거 싫어하는 당신에게 딱! 아침 외출 전 SPF30 선크림 하나만 바르기! 5분이면 끝! 이것만으로도 80% 효과 봐요. 가장 쉽고 가성비 최고인 안티에이징이 바로 선크림!

💎 도시냥의 미래: 같은 나이인데 10년 차이 나는 피부, 주변에서 봤죠? 그 차이가 바로 선크림이에요. 지금부터 습관 들이면 10년 후 "나이가 안 먹네?" 소리 들을 수 있어요!`,

        routine: {
            morning: [
                '외출 시 선크림 SPF30 (최소한, 5분이면 충분)',
                '이것만은 꼭!',
                '창가 좌석이라면 매일 바르기 권장',
                ''
            ],
            daytime: [
                '점심 외출 시 모자 or 양산 (선택)',
                '창가 자리는 피하거나 블라인드 활용',
                '장시간 외출: 선스틱 한 번 추가',
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
                { name: '초간편 선크림', detail: 'SPF30, 가볍고 빠른 흡수, 백탁 없음' }
            ],
            optional: [
                { name: '클렌징 폼', detail: '선크림 사용 시 필요' },
                { name: '보습크림', detail: '건조할 때만' },
                { name: '마스크팩', detail: '주 1회 기분 전환' }
            ],
            advanced: [
                { name: '여름용 고지수 선크림', detail: 'SPF50, 야외 활동 시' },
                { name: '진정 제품', detail: '햇빛 노출 후 필요 시' }
            ]
        },

        myths: [
            { wrong: '피부 강하니까 안 발라도 돼', right: 'UV 누적은 20년 후 나타남. 지금부터 시작!' },
            { wrong: '실내는 완전 안전', right: '창가 UV-A는 계속 들어옴. 최소한의 케어 필요' },
            { wrong: '케어는 나중에 해도 돼', right: '예방이 치료보다 10배 쉬움. 지금이 골든타임' }
        ],

        tips: {
            start: '1단계: 외출 시만 선크림. 2단계: 매일 바르기. 3단계: 보습 추가',
            motivation: '30대까지는 안 보여도, 40대부터 확실히 차이 남',
            easy: '귀찮으면 아침 선크림 하나만! 이것만으로도 80% 효과',
            habit: '세안대 옆에 선크림 놓기. 양치 후 바로 바르는 습관'
        }
    },

    'baby_chick': {
        icon: '🐣',
        animal: 'UV 새싹',
        name: 'UV 새싹',
        nickname: '비기너 병아리',
        tagline: '이제 막 부화한 UV 케어의 시작! 환영해요',
        character_intro: '당신은 병아리처럼 이제 막 UV 케어 세계에 발을 디딘, 성장 가능성 무한대인 새싹입니다!',
        description: `🐣 병아리가 알을 깨고 나왔어요! 세상이 낯설고, 뭘 먹어야 할지 모르겠지만... 일단 삐약삐약 시작했다는 게 중요해요! 당신이 바로 UV 케어의 새싹이에요. 이 테스트를 한 것만으로도 이미 시작한 거예요!

"SPF가 뭐지? PA는? 무기 차단제? 유기 차단제?" 머리가 복잡하죠? 괜찮아요! 모든 사막여우도 처음엔 병아리였어요. 중요한 건 완벽함이 아니라 "시작"이에요!

🌱 새싹의 3단계 성장 로드맵:
1️⃣ **1단계 (첫 1개월)**: 외출할 때만 선크림 바르기! SPF30 이상, 500원 동전 크기, 얼굴·목·귀·손등! 이것만!
2️⃣ **2단계 (2-3개월)**: 실내에 있어도 매일 바르기! 흐린 날도, 겨울에도! 양치질처럼 습관화!
3️⃣ **3단계 (3개월~)**: 야외 활동 시 재도포 + 저녁 클렌징 추가! 이제 중급자!

💡 새싹의 꿀팁: 완벽 안 해도 돼요! 하루 빼먹었다고 자책 금지! 다시 시작하면 돼요. 3개월만 버티면 습관 되고, 1년 후엔 "선크림 안 바르면 이상해!"가 될 거예요!

🎉 새싹이 대단한 이유: 40대부터 시작하는 사람들도 많은데, 당신은 지금 시작했잖아요! 이미 미래의 승리자예요! 10년 후 거울 보면서 "그때 시작하길 잘했다" 할 거예요!`,

        routine: {
            morning: [
                '1단계: 세안 (물 or 클렌징 폼)',
                '2단계: 선크림 SPF30 이상 (500원 동전 크기)',
                '외출 30분 전이 이상적이지만, 바로 나가도 OK',
                '이것만으로도 80점!'
            ],
            daytime: [
                '외출 많은 날: 점심 후 한 번 더 바르기 (선택)',
                '장시간 야외: 2-3시간마다 재도포',
                '모자, 선글라스도 좋은 방법',
                '일단은 아침 한 번만 바르는 것부터 습관화'
            ],
            evening: [
                '선크림 바른 날: 클렌징 폼으로 세안 (필수)',
                '건조하면 보습크림 (선택)',
                '일주일에 한 번 마스크팩 (선택)',
                '단순하게 시작하기'
            ]
        },

        products: {
            essential: [
                { name: '입문용 선크림', detail: 'SPF30-50, 가볍고 저렴한 제품으로 시작' },
                { name: '클렌징 폼', detail: '저자극 제품, 선크림 제거용' }
            ],
            optional: [
                { name: '보습크림', detail: '건조할 때 사용' },
                { name: '휴대용 선스틱', detail: '익숙해지면 재도포용으로' }
            ],
            advanced: [
                { name: '고지수 선크림', detail: 'SPF50+, 야외 활동 시' },
                { name: '진정 제품', detail: '햇빛 노출 후 필요 시' }
            ]
        },

        myths: [
            { wrong: '비싼 제품을 써야 효과 있다', right: '저렴해도 SPF/PA 표기 있으면 효과 동일. 가성비 제품으로 시작' },
            { wrong: '완벽하게 해야 한다', right: '매일 80점이 가끔 100점보다 낫다. 꾸준함이 핵심' },
            { wrong: '실내/흐린 날은 안 발라도 돼', right: 'UV는 항상 존재. 매일 바르는 습관 들이기' }
        ],

        tips: {
            start: '1주차: 외출 시만. 2주차: 매일 아침. 4주차: 재도포 시도. 천천히 익히기',
            product: '첫 제품은 약국/올리브영 인기 제품 추천. 리뷰 많은 것으로',
            amount: '얼굴 기준 500원 동전 크기. 적게 바르면 효과 반감',
            habit: '세안대에 선크림 두기. 양치 후 바로 바르는 습관'
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

    // 타입 이미지
    const typeImageContainer = document.getElementById('type-image');
    if (typeImageContainer) {
        typeImageContainer.innerHTML = `<img src="images/${type}.png" alt="${data.name}" style="width: 100%; max-width: 600px; height: auto; border-radius: 12px;">`;
    }

    // 케어 루틴
    document.getElementById('routine-morning').innerHTML = data.routine.morning.map(item => `<li>${item}</li>`).join('');
    document.getElementById('routine-daytime').innerHTML = data.routine.daytime.map(item => `<li>${item}</li>`).join('');
    document.getElementById('routine-evening').innerHTML = data.routine.evening.map(item => `<li>${item}</li>`).join('');

    // 제품 추천 (가격 정보 제거됨)
    document.getElementById('products-essential').innerHTML = data.products.essential.map(p =>
        `<li><strong>${p.name}</strong>: ${p.detail}</li>`
    ).join('');
    document.getElementById('products-optional').innerHTML = data.products.optional.map(p =>
        `<li><strong>${p.name}</strong>: ${p.detail}</li>`
    ).join('');
    if (data.products.advanced) {
        document.getElementById('products-advanced').innerHTML = data.products.advanced.map(p =>
            `<li><strong>${p.name}</strong>: ${p.detail}</li>`
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
    updateOrCreateMeta('og:image', `${window.location.origin}/images/${type}.png`);
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

    // 현재 결과 페이지 URL (캐릭터 정보 포함)
    const resultUrl = `https://artt28.github.io/survey_aftersun/results.html?type=${type}&score=${score}`;

    if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: `나는 ${data.icon} ${data.name}!`,
                description: `${data.tagline}\n${data.animal} 같은 나의 UV 케어 스타일!`,
                imageUrl: `https://artt28.github.io/survey_aftersun/images/${type}.png`,
                link: {
                    mobileWebUrl: resultUrl,
                    webUrl: resultUrl
                }
            },
            buttons: [
                {
                    title: '이 캐릭터 자세히 보기',
                    link: {
                        mobileWebUrl: resultUrl,
                        webUrl: resultUrl
                    }
                },
                {
                    title: '나도 테스트하기',
                    link: {
                        mobileWebUrl: 'https://artt28.github.io/survey_aftersun/',
                        webUrl: 'https://artt28.github.io/survey_aftersun/'
                    }
                }
            ]
        });
    } else {
        alert('카카오톡 공유 기능을 사용할 수 없습니다.');
    }
}

// 트위터 공유
function shareTwitter() {
    const type = new URLSearchParams(window.location.search).get('type');
    const score = new URLSearchParams(window.location.search).get('score');
    const data = uvTypes[type];
    const text = `나는 ${data.icon} ${data.name}!\n${data.animal} 같은 나의 UV 케어 스타일!\n너도 어떤 UV 동물인지 알아봐!`;
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
