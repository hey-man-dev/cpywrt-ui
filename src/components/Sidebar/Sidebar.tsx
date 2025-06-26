import React from 'react';
import { FolderKanban, UserCircle, Settings } from 'lucide-react';
import type { MenuSection } from '../../types';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const mainMenuItems: MenuSection = {
    items: [
      { label: 'Copy Generator', active: true },
      { label: 'Brand Voice' },
      { label: 'Projects', icon: 'folder-kanban' }
    ]
  };

  const historyItems: MenuSection = {
    title: 'History',
    items: [
      { label: 'Nova Wallet Campaign' },
      { label: 'E-commerce Launch' }
    ]
  };

  const footerItems: MenuSection = {
    items: [
      { label: 'Profile', icon: 'user-circle' },
      { label: 'Settings', icon: 'settings' }
    ]
  };

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'folder-kanban':
        return <FolderKanban size={16} />;
      case 'user-circle':
        return <UserCircle size={16} />;
      case 'settings':
        return <Settings size={16} />;
      default:
        return null;
    }
  };

  const renderMenuSection = (section: MenuSection, className = '') => (
    <ul className={`cpywrt-sidebar-menu ${className}`}>
      {section.items.map((item, index) => (
        <li key={index} className={`cpywrt-sidebar-menu-item ${item.active ? 'active' : ''}`}>
          <a href={item.href || '#'}>
            {item.icon && (
              <i className="menu-icon">
                {renderIcon(item.icon)}
              </i>
            )}
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="cpywrt-sidebar">
      <div className="cpywrt-brand">cpywrt</div>
      
      {renderMenuSection(mainMenuItems)}
      
      <h3 className="cpywrt-sidebar-menu-header">{historyItems.title}</h3>
      {renderMenuSection(historyItems)}
      
      <div className="cpywrt-sidebar-footer">
        {renderMenuSection(footerItems)}
      </div>
    </aside>
  );
};

export default Sidebar;