import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';

function Problems() {
  return (
    <div style={{ display: 'flex' }}>
      {/* 사이드바 */}
      <Sidebar />

      <div style={{ flex: 1 }}>
        {/* 상단 네비게이션 바 */}
        <TopNav />

        <div style={{ backgroundColor: '#F3F6FE', minHeight: '91vh', paddingTop: '1px', display: 'flex', flexDirection: 'column' }}>
          {/* 큰 박스 안에 작은 박스 5개를 가로 스크롤로 배치 */}
          <Box
            sx={{
              backgroundColor: '#F3F6FE',
              borderRadius: 3,
              padding: 1,
              mx: 2,
              my: 0,
              overflowX: 'auto',
              display: 'flex',
              whiteSpace: 'nowrap',
            }}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  height: '80px',
                  width: '231px', // 고정된 너비 설정
                  backgroundColor: 'white',
                  borderRadius: 3,
                  textAlign: 'center',
                  mx: 1, // 각 박스 사이 간격
                  display: 'inline-flex', // inline-flex로 설정하여 가로 스크롤에 맞게 배치
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography variant="h6">문제 {index + 18}</Typography>
              </Box>
            ))}
          </Box>

          {/* 기존의 큰 흰색 박스 */}
          <Box
            sx={{
              height: '50vh',
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 3,
              textAlign: 'center',
              p: 1,
              mx: 2,
              my: 1,
              position: 'relative',
            }}
          >
            {/* 시험 문구와 버튼을 큰 박스에 직접 배치 */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mx: 2, my: 0 }}>
              <Typography variant="body1" sx={{ width: '30%', textAlign: 'left' }}>시험</Typography>
              <Typography variant="body1" sx={{ flex: 1, textAlign: 'left' }}>학습 시간:</Typography>
            </Box>

            {/* 시험 문제와 해설 영역 */}
            <Box
              sx={{
                marginTop: '0px',
                height: '500px',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              {/* 첫 번째 박스 */}
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: '#e0e0e0',
                  borderRadius: '3px 0 0 3px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 1,
                }}
              >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>시험 문제</Typography>
                
                {/* 답 입력 박스 */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <TextField
                    variant="outlined"
                    placeholder="답을 입력하세요"
                    size="small"
                    sx={{ width: '150px' }}
                  />
                </Box>
              </Box>

              {/* 두 번째 박스 */}
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: '#d0d0d0',
                  borderRadius: '0 3px 3px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body1">해설</Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Problems;
