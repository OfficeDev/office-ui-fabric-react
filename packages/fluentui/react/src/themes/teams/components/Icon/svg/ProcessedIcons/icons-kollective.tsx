import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M28.423 15.166c-.204 0-.365.247-.43.655l-1.802-.003a3.158 3.158 0 0 0-.26-.98 3.168 3.168 0 0 0 1.598-1.518.463.463 0 0 0 .1.042c.284.067.515-.292.517-.8s-.227-.982-.512-1.05-.514.44-.514.8a1.212 1.212 0 0 0 .106.593 3.223 3.223 0 0 1-1.513 1.511 2.782 2.782 0 0 0-.21-.296 5.687 5.687 0 0 0 1.29-3.83c.276-.012.446-.42.38-.925-.068-.512-.355-.927-.639-.927s-.446.53-.395.927a1.22 1.22 0 0 0 .277.707 5.6 5.6 0 0 1-1.175 3.766c-.07-.074-.239-.1-.261-.226-.104-.604.596-2.53.304-4.53.269-.168.354-.795.189-1.544-.196-.875-.664-1.582-1.046-1.582s-.504.823-.336 1.582a2.504 2.504 0 0 0 .729 1.444c.093 1.441-.196 4.175-.67 4.331-.099-.032-.203-1.43-.523-3.457a22.015 22.015 0 0 0-2.55-7.444 1.43 1.43 0 0 0-.038-1.08C20.777.597 20.196.001 19.742 0c-.46 0-.623.598-.362 1.331a1.975 1.975 0 0 0 1.22 1.322 20.085 20.085 0 0 1 1.972 5.136 12.36 12.36 0 0 1 .442 5.54c0-.038-.943-4.328-2.446-6.495.462-.84-.89-3.424-1.94-2.602-.75.587.333 2.98 1.281 2.83a16.982 16.982 0 0 1 2.345 6.772c.008.139-1.325-1.829-3.092-4.11s-3.967-4.875-5.7-5.99a1.76 1.76 0 0 0 .003-.699A2.648 2.648 0 0 0 10.978 1a1.632 1.632 0 0 0-1.741 1.965 2.813 2.813 0 0 0 2.487 2.039 1.416 1.416 0 0 0 1.222-.402c1.227.376 3.427 2.75 5.295 5.132s3.412 4.776 3.327 5.19a16.345 16.345 0 0 0-5.845-3.624 2.332 2.332 0 0 0-.92-2.27 1.933 1.933 0 0 0-2.723.408 2.187 2.187 0 0 0 .679 2.852 2.047 2.047 0 0 0 2.54-.106c2.963.701 5.783 2.795 5.806 3.557l-6.826-.106q-3.41-.053-6.822-.11a2.237 2.237 0 0 0-2.128-1.688 2.163 2.163 0 1 0 0 4.325 2.237 2.237 0 0 0 2.128-1.689q3.414-.058 6.822-.11l6.826-.106c-.023.763-2.843 2.856-5.806 3.556a2.187 2.187 0 0 0-2.569-.122 2.13 2.13 0 0 0-.65 2.87 1.933 1.933 0 0 0 2.723.408 2.333 2.333 0 0 0 .92-2.27 16.334 16.334 0 0 0 5.844-3.625c.086.415-1.457 2.807-3.326 5.191-1.869 2.382-4.069 4.756-5.296 5.132a1.661 1.661 0 0 0-1.222-.402 2.743 2.743 0 0 0-2.486 2.04 1.633 1.633 0 0 0 1.74 1.964 2.647 2.647 0 0 0 2.488-2.036 1.757 1.757 0 0 0-.003-.698c1.733-1.116 3.936-3.711 5.7-5.99 1.766-2.28 3.1-4.248 3.092-4.11a16.978 16.978 0 0 1-2.345 6.772c-.948-.15-2.032 2.244-1.281 2.83 1.05.821 2.402-1.762 1.94-2.601 1.503-2.168 2.446-6.458 2.446-6.496a12.36 12.36 0 0 1-.442 5.54 20.063 20.063 0 0 1-1.973 5.136 1.978 1.978 0 0 0-1.219 1.322c-.26.734-.098 1.332.362 1.332.454-.004 1.035-.598 1.296-1.332a1.43 1.43 0 0 0 .039-1.08 22.022 22.022 0 0 0 2.55-7.444c.32-2.026.424-3.425.522-3.457.475.156.764 2.89.67 4.332a2.504 2.504 0 0 0-.728 1.443c-.168.76-.046 1.582.336 1.582s.85-.707 1.046-1.582c.165-.749.08-1.376-.188-1.543.292-2-.409-3.927-.305-4.531.023-.126.19-.152.26-.225a5.597 5.597 0 0 1 1.176 3.765 1.217 1.217 0 0 0-.276.708c-.052.397.11.926.395.926s.57-.415.638-.926c.067-.505-.103-.913-.38-.926a5.685 5.685 0 0 0-1.289-3.83 2.767 2.767 0 0 0 .21-.296 3.22 3.22 0 0 1 1.513 1.512 1.206 1.206 0 0 0-.106.591c0 .362.23.868.514.801s.514-.539.511-1.048-.232-.869-.516-.801a.458.458 0 0 0-.1.042 3.167 3.167 0 0 0-1.6-1.518 3.14 3.14 0 0 0 .261-.98l1.803-.003c.064.408.225.654.429.654.225 0 .46-.3.46-.829 0-.35-.155-.84-.46-.84zm-.728-3.033a.542.542 0 0 1 .118.425c-.015.17-.095.257-.178.193a.537.537 0 0 1-.119-.425c.017-.17.096-.254.179-.193zM26.664 8.93a.644.644 0 0 1 .199.492c.004.207-.08.325-.186.26a.64.64 0 0 1-.204-.491c-.003-.208.084-.325.19-.261zm-6.388-7.216a.83.83 0 0 1-.395-.611c-.028-.25.103-.38.295-.29a.826.826 0 0 1 .392.609c.028.247-.103.379-.292.292zm-.674 4.422a.991.991 0 0 1-.47-.724c-.034-.296.126-.453.35-.347a.983.983 0 0 1 .47.723c.032.296-.125.45-.35.348zm-7.638-2.502a.916.916 0 0 1-1.142-.19.661.661 0 0 1-.038-1.013.913.913 0 0 1 1.141.186.665.665 0 0 1 .04 1.017zm2.444 7.377a.716.716 0 0 1-1.026.144.78.78 0 0 1-.266-1.038.717.717 0 0 1 1.026-.145.78.78 0 0 1 .266 1.039zm-9.06 5.74a.755.755 0 1 1 0-1.498.755.755 0 1 1 0 1.498zm8.793 5.277a.716.716 0 0 1-1.025-.144.78.78 0 0 1 .266-1.04.715.715 0 0 1 1.025.145.78.78 0 0 1-.265 1.038zm-2.216 7.355a.912.912 0 0 1-1.141.186.66.66 0 0 1 .038-1.012.917.917 0 0 1 1.142-.19.666.666 0 0 1-.039 1.015zm7.558-2.447c-.225.105-.384-.052-.351-.348a.988.988 0 0 1 .47-.723c.225-.103.382.051.351.347a.984.984 0 0 1-.47.723zm.692 4.25c-.191.09-.322-.04-.294-.289a.831.831 0 0 1 .395-.61c.189-.087.32.045.292.292a.825.825 0 0 1-.393.607zm6.502-8.868c.105-.065.19.053.186.26a.646.646 0 0 1-.2.492c-.107.064-.193-.053-.19-.26a.638.638 0 0 1 .204-.493zm.958-3.069c.083-.064.163.023.178.194a.544.544 0 0 1-.118.424c-.083.061-.162-.022-.179-.193a.537.537 0 0 1 .119-.425zM24.577 7.271c-.053-.338.023-.524.17-.421a1.414 1.414 0 0 1 .362.8c.056.337-.021.524-.17.421a1.44 1.44 0 0 1-.362-.8zm.532 17.078a1.416 1.416 0 0 1-.362.8c-.147.104-.223-.083-.17-.42a1.44 1.44 0 0 1 .362-.8c.15-.104.227.083.17.42zm-1.223-6.1a2.099 2.099 0 0 1-1.887-2.26 2.099 2.099 0 0 1 1.887-2.26 2.099 2.099 0 0 1 1.886 2.26 2.099 2.099 0 0 1-1.886 2.26zm4.578-1.975c-.085 0-.154-.123-.154-.275s.07-.274.154-.274.154.123.154.274-.069.275-.154.275z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M28.423 15.166c-.204 0-.365.247-.43.655l-1.802-.003a3.158 3.158 0 0 0-.26-.98 3.168 3.168 0 0 0 1.598-1.518.463.463 0 0 0 .1.042c.284.067.515-.292.517-.8s-.227-.982-.512-1.05-.514.44-.514.8a1.212 1.212 0 0 0 .106.593 3.223 3.223 0 0 1-1.513 1.511 2.782 2.782 0 0 0-.21-.296 5.687 5.687 0 0 0 1.29-3.83c.276-.012.446-.42.38-.925-.068-.512-.355-.927-.639-.927s-.446.53-.395.927a1.22 1.22 0 0 0 .277.707 5.6 5.6 0 0 1-1.175 3.766c-.07-.074-.239-.1-.261-.226-.104-.604.596-2.53.304-4.53.269-.168.354-.795.189-1.544-.196-.875-.664-1.582-1.046-1.582s-.504.823-.336 1.582a2.504 2.504 0 0 0 .729 1.444c.093 1.441-.196 4.175-.67 4.331-.099-.032-.203-1.43-.523-3.457a22.015 22.015 0 0 0-2.55-7.444 1.43 1.43 0 0 0-.038-1.08C20.777.597 20.196.001 19.742 0c-.46 0-.623.598-.362 1.331a1.975 1.975 0 0 0 1.22 1.322 20.085 20.085 0 0 1 1.972 5.136 12.36 12.36 0 0 1 .442 5.54c0-.038-.943-4.328-2.446-6.495.462-.84-.89-3.424-1.94-2.602-.75.587.333 2.98 1.281 2.83a16.982 16.982 0 0 1 2.345 6.772c.008.139-1.325-1.829-3.092-4.11s-3.967-4.875-5.7-5.99a1.76 1.76 0 0 0 .003-.699A2.648 2.648 0 0 0 10.978 1a1.632 1.632 0 0 0-1.741 1.965 2.813 2.813 0 0 0 2.487 2.039 1.416 1.416 0 0 0 1.222-.402c1.227.376 3.427 2.75 5.295 5.132s3.412 4.776 3.327 5.19a16.345 16.345 0 0 0-5.845-3.624 2.332 2.332 0 0 0-.92-2.27 1.933 1.933 0 0 0-2.723.408 2.187 2.187 0 0 0 .679 2.852 2.047 2.047 0 0 0 2.54-.106c2.963.701 5.783 2.795 5.806 3.557l-6.826-.106q-3.41-.053-6.822-.11a2.237 2.237 0 0 0-2.128-1.688 2.163 2.163 0 1 0 0 4.325 2.237 2.237 0 0 0 2.128-1.689q3.414-.058 6.822-.11l6.826-.106c-.023.763-2.843 2.856-5.806 3.556a2.187 2.187 0 0 0-2.569-.122 2.13 2.13 0 0 0-.65 2.87 1.933 1.933 0 0 0 2.723.408 2.333 2.333 0 0 0 .92-2.27 16.334 16.334 0 0 0 5.844-3.625c.086.415-1.457 2.807-3.326 5.191-1.869 2.382-4.069 4.756-5.296 5.132a1.661 1.661 0 0 0-1.222-.402 2.743 2.743 0 0 0-2.486 2.04 1.633 1.633 0 0 0 1.74 1.964 2.647 2.647 0 0 0 2.488-2.036 1.757 1.757 0 0 0-.003-.698c1.733-1.116 3.936-3.711 5.7-5.99 1.766-2.28 3.1-4.248 3.092-4.11a16.978 16.978 0 0 1-2.345 6.772c-.948-.15-2.032 2.244-1.281 2.83 1.05.821 2.402-1.762 1.94-2.601 1.503-2.168 2.446-6.458 2.446-6.496a12.36 12.36 0 0 1-.442 5.54 20.063 20.063 0 0 1-1.973 5.136 1.978 1.978 0 0 0-1.219 1.322c-.26.734-.098 1.332.362 1.332.454-.004 1.035-.598 1.296-1.332a1.43 1.43 0 0 0 .039-1.08 22.022 22.022 0 0 0 2.55-7.444c.32-2.026.424-3.425.522-3.457.475.156.764 2.89.67 4.332a2.504 2.504 0 0 0-.728 1.443c-.168.76-.046 1.582.336 1.582s.85-.707 1.046-1.582c.165-.749.08-1.376-.188-1.543.292-2-.409-3.927-.305-4.531.023-.126.19-.152.26-.225a5.597 5.597 0 0 1 1.176 3.765 1.217 1.217 0 0 0-.276.708c-.052.397.11.926.395.926s.57-.415.638-.926c.067-.505-.103-.913-.38-.926a5.685 5.685 0 0 0-1.289-3.83 2.767 2.767 0 0 0 .21-.296 3.22 3.22 0 0 1 1.513 1.512 1.206 1.206 0 0 0-.106.591c0 .362.23.868.514.801s.514-.539.511-1.048-.232-.869-.516-.801a.458.458 0 0 0-.1.042 3.167 3.167 0 0 0-1.6-1.518 3.14 3.14 0 0 0 .261-.98l1.803-.003c.064.408.225.654.429.654.225 0 .46-.3.46-.829 0-.35-.155-.84-.46-.84zm-.728-3.033a.542.542 0 0 1 .118.425c-.015.17-.095.257-.178.193a.537.537 0 0 1-.119-.425c.017-.17.096-.254.179-.193zM26.664 8.93a.644.644 0 0 1 .199.492c.004.207-.08.325-.186.26a.64.64 0 0 1-.204-.491c-.003-.208.084-.325.19-.261zm-6.388-7.216a.83.83 0 0 1-.395-.611c-.028-.25.103-.38.295-.29a.826.826 0 0 1 .392.609c.028.247-.103.379-.292.292zm-.674 4.422a.991.991 0 0 1-.47-.724c-.034-.296.126-.453.35-.347a.983.983 0 0 1 .47.723c.032.296-.125.45-.35.348zm-7.638-2.502a.916.916 0 0 1-1.142-.19.661.661 0 0 1-.038-1.013.913.913 0 0 1 1.141.186.665.665 0 0 1 .04 1.017zm2.444 7.377a.716.716 0 0 1-1.026.144.78.78 0 0 1-.266-1.038.717.717 0 0 1 1.026-.145.78.78 0 0 1 .266 1.039zm-9.06 5.74a.755.755 0 1 1 0-1.498.755.755 0 1 1 0 1.498zm8.793 5.277a.716.716 0 0 1-1.025-.144.78.78 0 0 1 .266-1.04.715.715 0 0 1 1.025.145.78.78 0 0 1-.265 1.038zm-2.216 7.355a.912.912 0 0 1-1.141.186.66.66 0 0 1 .038-1.012.917.917 0 0 1 1.142-.19.666.666 0 0 1-.039 1.015zm7.558-2.447c-.225.105-.384-.052-.351-.348a.988.988 0 0 1 .47-.723c.225-.103.382.051.351.347a.984.984 0 0 1-.47.723zm.692 4.25c-.191.09-.322-.04-.294-.289a.831.831 0 0 1 .395-.61c.189-.087.32.045.292.292a.825.825 0 0 1-.393.607zm6.502-8.868c.105-.065.19.053.186.26a.646.646 0 0 1-.2.492c-.107.064-.193-.053-.19-.26a.638.638 0 0 1 .204-.493zm.958-3.069c.083-.064.163.023.178.194a.544.544 0 0 1-.118.424c-.083.061-.162-.022-.179-.193a.537.537 0 0 1 .119-.425zM24.577 7.271c-.053-.338.023-.524.17-.421a1.414 1.414 0 0 1 .362.8c.056.337-.021.524-.17.421a1.44 1.44 0 0 1-.362-.8zm.532 17.078a1.416 1.416 0 0 1-.362.8c-.147.104-.223-.083-.17-.42a1.44 1.44 0 0 1 .362-.8c.15-.104.227.083.17.42zm-1.223-6.1a2.099 2.099 0 0 1-1.887-2.26 2.099 2.099 0 0 1 1.887-2.26 2.099 2.099 0 0 1 1.886 2.26 2.099 2.099 0 0 1-1.886 2.26zm4.578-1.975c-.085 0-.154-.123-.154-.275s.07-.274.154-.274.154.123.154.274-.069.275-.154.275z"
        />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsProcessedSvgIconSpec;
