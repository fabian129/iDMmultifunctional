import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'ID Multifunctional - Operational Architecture';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#09090b', // Zinc-950
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    position: 'relative',
                }}
            >
                {/* Background Grid */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        opacity: 0.2,
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 10 }}>
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            textTransform: 'uppercase',
                        }}
                    >
                        ID Multifunctional
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            fontWeight: 400,
                            opacity: 0.7,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                        }}
                    >
                        Operational Architecture
                    </div>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        fontSize: 24,
                        opacity: 0.5,
                    }}
                >
                    <div style={{ padding: '8px 16px', border: '1px solid white', borderRadius: 999 }}>Digital Audit</div>
                    <div style={{ padding: '8px 16px', border: '1px solid white', borderRadius: 999 }}>Playbooks</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
