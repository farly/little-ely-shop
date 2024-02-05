const StarIcon = (props: any) => (
  <>
    {props.fill ? (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.0967 7.41243C19.039 7.24262 18.9329 7.09341 18.7914 6.98322C18.65 6.87303 18.4793 6.80669 18.3005 6.79238L13.0714 6.37688L10.8086 1.36786C10.7365 1.20653 10.6193 1.0695 10.4711 0.97332C10.3229 0.877135 10.15 0.825903 9.97327 0.825806C9.79658 0.825709 9.62363 0.876751 9.4753 0.972773C9.32698 1.0688 9.20961 1.20569 9.13737 1.36694L6.87455 6.37688L1.6454 6.79238C1.46971 6.8063 1.30175 6.87054 1.16161 6.97742C1.02147 7.08429 0.915094 7.22928 0.855199 7.39503C0.795304 7.56079 0.784429 7.74028 0.823877 7.91205C0.863325 8.08383 0.951424 8.24059 1.07763 8.36361L4.94194 12.1307L3.57526 18.0487C3.53377 18.2278 3.54707 18.4153 3.61344 18.5868C3.67981 18.7583 3.79619 18.9058 3.94748 19.0103C4.09877 19.1149 4.27797 19.1715 4.46185 19.1729C4.64572 19.1743 4.82577 19.1204 4.97863 19.0182L9.97297 15.6886L14.9673 19.0182C15.1235 19.1219 15.3078 19.1753 15.4953 19.1712C15.6828 19.1671 15.8645 19.1057 16.0161 18.9952C16.1676 18.8847 16.2817 18.7305 16.3429 18.5532C16.4042 18.376 16.4097 18.1842 16.3588 18.0037L14.6811 12.1334L18.8417 8.38929C19.1141 8.14347 19.2141 7.76007 19.0967 7.41243Z"
          fill={'#F3CD03'}
        />
      </svg>
    ) : (
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.99772 13.1308L4.63104 19.0488C4.58872 19.228 4.60143 19.4158 4.6675 19.5877C4.73357 19.7596 4.84993 19.9075 5.00139 20.0122C5.15285 20.1169 5.33237 20.1735 5.5165 20.1746C5.70062 20.1757 5.8808 20.1212 6.03349 20.0183L11.0278 16.6888L16.0222 20.0183C16.1784 20.1221 16.3627 20.1755 16.5502 20.1714C16.7377 20.1673 16.9194 20.1058 17.0709 19.9953C17.2225 19.8849 17.3365 19.7306 17.3978 19.5534C17.4591 19.3761 17.4646 19.1844 17.4136 19.0039L15.736 13.1336L19.8966 9.38944C20.0298 9.26946 20.125 9.11304 20.1703 8.93955C20.2156 8.76605 20.209 8.58308 20.1515 8.41327C20.0939 8.24345 19.9878 8.09424 19.8463 7.98408C19.7048 7.87392 19.5342 7.80764 19.3554 7.79345L14.1263 7.37703L11.8634 2.36801C11.7913 2.20672 11.674 2.06976 11.5257 1.97366C11.3774 1.87755 11.2045 1.82642 11.0278 1.82642C10.8511 1.82642 10.6782 1.87755 10.5299 1.97366C10.3817 2.06976 10.2644 2.20672 10.1922 2.36801L7.92942 7.37703L2.70026 7.79254C2.52457 7.80645 2.35661 7.87069 2.21647 7.97757C2.07634 8.08445 1.96996 8.22943 1.91006 8.39518C1.85017 8.56094 1.83929 8.74044 1.87874 8.91221C1.91819 9.08398 2.00629 9.24074 2.1325 9.36376L5.99772 13.1308ZM8.61459 9.16288C8.77831 9.14998 8.93555 9.09328 9.06982 8.99871C9.20408 8.90414 9.31044 8.77519 9.37773 8.62538L11.0278 4.97387L12.6779 8.62538C12.7452 8.77519 12.8516 8.90414 12.9859 8.99871C13.1201 9.09328 13.2774 9.14998 13.4411 9.16288L17.0843 9.45181L14.0841 12.1521C13.8236 12.387 13.7199 12.7484 13.8153 13.0859L14.9646 17.108L11.5378 14.8231C11.3874 14.7222 11.2104 14.6683 11.0292 14.6683C10.8481 14.6683 10.671 14.7222 10.5206 14.8231L6.93972 17.2107L7.90282 13.0409C7.93813 12.8876 7.93339 12.7277 7.88905 12.5767C7.84472 12.4257 7.76228 12.2887 7.64966 12.1787L4.8631 9.4619L8.61459 9.16288Z"
          fill="#F3CD03"
        />
      </svg>
    )}
  </>
);

export default StarIcon;
