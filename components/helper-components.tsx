import React from "react";
/**
 * For demonstration purposes, feel free to delete or modify
 * any of these components, no magic going on here!
 */

export const SidebarPlaceholder = () => (
  <div className="sidebar-placeholder">
    <span className="emoji">👋</span>
    <h3>
      Welcome to the
      <br />
      <b>Tina Cloud Starter</b>!
    </h3>
    <p>
      Let's get a form set up
      <br />
      so you can start editing.
    </p>
    <p>
      <a
        href="https://tinacms-site-next-git-tina-cloud-docs-tinacms.vercel.app/docs/tina-cloud/client/"
        target="_blank"
      >
        <span className="emoji">📖</span> Client Setup Guide
      </a>
    </p>
    <style jsx>{`
      .sidebar-placeholder {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--tina-padding-big) var(--tina-padding-big) 64px
          var(--tina-padding-big);
        width: 100%;
        height: 100%;
        overflow-y: auto;
      }

      .sidebar-placeholder > .emoji {
        display: block;
      }

      .sidebar-placeholder > *:first-child {
        margin: 0 0 var(--tina-padding-big) 0;
      }

      .sidebar-placeholder h3 {
        font-size: var(--tina-font-size-5);
        font-weight: normal;
        color: inherit;
        display: block;
        margin: 0 0 var(--tina-padding-big) 0;
      }

      .sidebar-placeholder p {
        display: block;
        margin: 0 0 var(--tina-padding-big) 0;
      }

      .sidebar-placeholder .emoji {
        font-size: 40px;
        line-height: 1;
        display: inline-block;
      }

      .sidebar-placeholder a {
        text-align: center;
        border: 0;
        border-radius: var(--tina-radius-big);
        border: 1px solid var(--tina-color-grey-2);
        box-shadow: var(--tina-shadow-small);
        font-weight: var(--tina-font-weight-regular);
        cursor: pointer;
        font-size: var(--tina-font-size-0);
        background-color: white;
        color: var(--tina-color-grey-8);
        padding: var(--tina-padding-small) var(--tina-padding-big)
          var(--tina-padding-small) 56px;
        position: relative;
        text-decoration: none;
        display: inline-block;
      }

      .sidebar-placeholder a .emoji {
        font-size: 24px;
        position: absolute;
        left: var(--tina-padding-big);
        top: 50%;
        transform-origin: 50% 50%;
        transform: translate3d(0, -50%, 0);
        transition: all var(--tina-timing-short) ease-out;
      }

      .sidebar-placeholder a:hover {
        color: var(--tina-color-primary);
      }
    `}</style>
  </div>
);
