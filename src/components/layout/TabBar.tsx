import React from 'react'
import { C } from '@/constants/theme'
import { Icon } from '@/components/ui'
import type { Screen } from '@/types'

export const TABS: { id: Screen; label: string; icon: string }[] = [
  { id: 'home',          label: 'Início',       icon: 'home'     },
  { id: 'schedule',      label: 'Escala',       icon: 'calendar' },
  { id: 'requests',      label: 'Solicitações', icon: 'doc'      },
  { id: 'notifications', label: 'Avisos',       icon: 'bell'     },
  { id: 'profile',       label: 'Perfil',       icon: 'person'   },
]

export interface TabBarProps {
  active: Screen
  onSelect: (s: Screen) => void
  badge: number
}

export function TabBar({ active, onSelect, badge }: TabBarProps) {
  return (
    <div
      style={{
        display: 'flex',
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        paddingBottom: 20,
        paddingTop: 8,
      }}
    >
      {TABS.map(tab => {
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            className="tap"
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              padding: '6px 0',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative' }}>
              <Icon name={tab.icon} size={22} color={isActive ? C.green : C.text3} />
              {tab.id === 'notifications' && badge > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: -3,
                    right: -5,
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    background: C.red,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 9,
                    fontWeight: 700,
                    color: '#fff',
                    border: `2px solid ${C.surface}`,
                  }}
                >
                  {badge}
                </div>
              )}
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? C.green : C.text3,
              }}
            >
              {tab.label}
            </div>
          </button>
        )
      })}
    </div>
  )
}
