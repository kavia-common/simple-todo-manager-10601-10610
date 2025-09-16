import React from 'react';
import styles from './Home.module.css';
import common from './common.module.css';
import imgAvatar from '../../assets/figmaimages/figma_image_1_54.png';
import imgCard1 from '../../assets/figmaimages/figma_image_1_83.png';
import imgCard2 from '../../assets/figmaimages/figma_image_1_92.png';
import imgCard3 from '../../assets/figmaimages/figma_image_1_101.png';
import imgCard4 from '../../assets/figmaimages/figma_image_1_110.png';

/**
 * PUBLIC_INTERFACE
 * Home
 * A pixel-accurate recreation of the provided Figma-exported static design,
 * transformed into a React functional component with scoped CSS modules.
 * This component renders the home screen as the root view.
 */
function Home() {
  return (
    <div className={styles.pageRoot}>
      <div
        className={`${common['screen-frame']}`}
        role="img"
        aria-label="Foodgo Home screen"
      >
        {/* Title */}
        <div
          className={`${common.abs} ${common['typo-5']}`}
          style={{ left: 19, top: 28, width: 129, height: 61 }}
        >
          Foodgo
        </div>

        {/* Subtitle */}
        <div
          className={`${common.abs} ${common['typo-6']}`}
          style={{ left: 19, top: 89, width: 238, height: 27 }}
        >
          Order your favourite food!
        </div>

        {/* Mask group avatar */}
        <div
          className={common.abs}
          style={{
            left: 351,
            top: 28,
            width: 60,
            height: 60,
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          <div
            className={`${common.abs} ${common['bg-d9d9d9']} ${common['radius-20']}`}
            style={{ left: 0, top: 0, width: 60, height: 60 }}
          />
          <img
            className={common.abs}
            src={imgAvatar}
            alt="avatar"
            style={{
              left: -29,
              top: -3,
              width: 106,
              height: 73,
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Search + filter group */}
        <div
          className={common.abs}
          style={{ left: 19, top: 163, width: 392, height: 60 }}
        >
          <div
            className={`${common.abs} ${common['bg-ffffff']} ${common['radius-20']} ${common['shadow-0']}`}
            style={{ left: 0, top: 0, width: 319, height: 60 }}
          />
          <div
            className={`${common.abs} ${common['bg-ef2a39']} ${common['radius-20']} ${common['shadow-1']}`}
            style={{ left: 332, top: 0, width: 60, height: 60 }}
          />
          <div
            className={`${styles.icon}`}
            style={{
              left: 350,
              top: 18,
              width: 24,
              height: 24,
              background: 'var(--color-ffffff)',
              borderRadius: 4,
            }}
            aria-hidden="true"
          />
          <div
            className={styles.icon}
            style={{
              left: 19,
              top: 18,
              width: 24,
              height: 24,
              background: 'transparent',
              borderRadius: 4,
            }}
            aria-hidden="true"
          />
          <div
            className={`${common.abs} ${common['typo-7']}`}
            style={{ left: 67, top: 19, width: 56, height: 21 }}
          >
            Search
          </div>
        </div>

        {/* Categories */}
        <div
          className={common.abs}
          style={{
            left: -1,
            top: 270,
            width: 412,
            height: 50,
            overflow: 'hidden',
          }}
        >
          <div
            className={`${common.abs} ${common['radius-20']}`}
            style={{ left: 19, top: 0, width: 75, height: 50 }}
          >
            <div
              className={`${common.abs} ${common['bg-ef2a39']} ${common['radius-20']} ${common['shadow-1']}`}
              style={{ left: 0, top: 0, width: 75, height: 50 }}
            />
            <div
              className={`${common.abs} ${common['typo-8']}`}
              style={{ left: 27, top: 15, width: 20, height: 19 }}
            >
              All
            </div>
          </div>

          <div
            className={`${common.abs} ${common['radius-20']}`}
            style={{ left: 108, top: 0, width: 120, height: 50 }}
          >
            <div
              className={`${common.abs} ${common['bg-f3f4f6']} ${common['radius-20']}`}
              style={{ left: 0, top: 0, width: 120, height: 50 }}
            />
            <div
              className={`${common.abs} ${common['typo-9']}`}
              style={{ left: 28, top: 15, width: 64, height: 19 }}
            >
              Combos
            </div>
          </div>

          <div
            className={`${common.abs} ${common['radius-20']}`}
            style={{ left: 242, top: 0, width: 120, height: 50 }}
          >
            <div
              className={`${common.abs} ${common['bg-f3f4f6']} ${common['radius-20']}`}
              style={{ left: 0, top: 0, width: 120, height: 50 }}
            />
            <div
              className={`${common.abs} ${common['typo-9']}`}
              style={{ left: 33, top: 16, width: 53, height: 19 }}
            >
              Sliders
            </div>
          </div>

          <div
            className={`${common.abs} ${common['radius-20']}`}
            style={{ left: 376, top: 0, width: 110, height: 50 }}
          >
            <div
              className={`${common.abs} ${common['bg-f3f4f6']} ${common['radius-20']}`}
              style={{ left: 0, top: 0, width: 110, height: 50 }}
            />
            <div
              className={`${common.abs} ${common['typo-9']}`}
              style={{ left: 27, top: 15, width: 56, height: 19 }}
            >
              Classic
            </div>
          </div>
        </div>

        {/* Product cards */}
        <div
          className={common.abs}
          style={{ left: 19, top: 351, width: 392, height: 481 }}
        >
          {/* Card 1 */}
          <div
            className={common.abs}
            style={{ left: 0, top: 0, width: 185, height: 225 }}
          >
            <div
              className={`${common.abs} ${common['bg-ffffff']} ${common['radius-20']} ${common['shadow-2']}`}
              style={{ left: 0, top: 0, width: 185, height: 225 }}
            />
            <img
              className={common.abs}
              src={imgCard1}
              alt="Cheeseburger"
              style={{
                left: 32,
                top: 5,
                width: 120,
                height: 121.7578125,
                objectFit: 'cover',
              }}
            />
            <div
              className={`${common.abs} ${common['bg-000000']}`}
              style={{
                left: 47,
                top: 109,
                width: 91,
                height: 11,
                borderRadius: '50%',
                opacity: 0.2,
              }}
            />
            <div
              className={`${common.abs} ${common['typo-10']}`}
              style={{
                left: 11,
                top: 136,
                width: 117,
                height: 44,
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
                textAlign: 'left',
              }}
            >
              Cheeseburger Wendy&apos;s Burger
            </div>
            <div
              className={styles.icon}
              style={{
                left: 145,
                top: 201,
                width: 24,
                height: 24,
                borderRadius: 4,
              }}
              aria-hidden="true"
            />
            <div
              className={common.abs}
              style={{ left: 11, top: 203, width: 44, height: 22 }}
            >
              <div
                className={styles.icon}
                style={{
                  left: 0,
                  top: 3,
                  width: 16,
                  height: 16,
                  background: 'var(--color-ff9633)',
                  borderRadius: 4,
                }}
                aria-hidden="true"
              />
              <div
                className={`${common.abs} ${common['typo-11']}`}
                style={{ left: 21, top: 0, width: 23, height: 22 }}
              >
                4.9
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={common.abs}
            style={{ left: 207, top: 0, width: 185, height: 225 }}
          >
            <div
              className={`${common.abs} ${common['bg-ffffff']} ${common['radius-20']} ${common['shadow-2']}`}
              style={{ left: 0, top: 0, width: 185, height: 225 }}
            />
            <img
              className={common.abs}
              src={imgCard2}
              alt="Veggie burger"
              style={{
                left: 32,
                top: 11,
                width: 120,
                height: 120,
                objectFit: 'cover',
              }}
            />
            <div
              className={`${common.abs} ${common['bg-000000']}`}
              style={{
                left: 48,
                top: 110,
                width: 91,
                height: 11,
                borderRadius: '50%',
                opacity: 0.2,
              }}
            />
            <div
              className={`${common.abs} ${common['typo-10']}`}
              style={{
                left: 11,
                top: 136,
                width: 117,
                height: 44,
                whiteSpace: 'pre-line',
                overflowWrap: 'break-word',
                textAlign: 'left',
              }}
            >
              Hamburger
              <br />
              Veggie Burger
            </div>
            <div
              className={styles.icon}
              style={{
                left: 145,
                top: 201,
                width: 24,
                height: 24,
                borderRadius: 4,
              }}
              aria-hidden="true"
            />
            <div
              className={common.abs}
              style={{ left: 11, top: 203, width: 44, height: 22 }}
            >
              <div
                className={styles.icon}
                style={{
                  left: 0,
                  top: 3,
                  width: 16,
                  height: 16,
                  background: 'var(--color-ff9633)',
                  borderRadius: 4,
                }}
                aria-hidden="true"
              />
              <div
                className={`${common.abs} ${common['typo-11']}`}
                style={{ left: 21, top: 0, width: 23, height: 22 }}
              >
                4.8
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={common.abs}
            style={{ left: 0, top: 256, width: 185, height: 225 }}
          >
            <div
              className={`${common.abs} ${common['bg-ffffff']} ${common['radius-20']} ${common['shadow-2']}`}
              style={{ left: 0, top: 0, width: 185, height: 225 }}
            />
            <img
              className={common.abs}
              src={imgCard3}
              alt="Chicken burger"
              style={{
                left: 20,
                top: 0,
                width: 150,
                height: 137.70001220703125,
                objectFit: 'cover',
              }}
            />
            <div
              className={`${common.abs} ${common['bg-000000']}`}
              style={{
                left: 40,
                top: 107,
                width: 110,
                height: 15.7609148,
                borderRadius: '50%',
                opacity: 0.2,
              }}
            />
            <div
              className={`${common.abs} ${common['typo-10']}`}
              style={{
                left: 11,
                top: 136,
                width: 117,
                height: 44,
                whiteSpace: 'pre-line',
                overflowWrap: 'break-word',
                textAlign: 'left',
              }}
            >
              Hamburger
              <br />
              Chicken Burger
            </div>
            <div
              className={styles.icon}
              style={{
                left: 145,
                top: 201,
                width: 24,
                height: 24,
                borderRadius: 4,
              }}
              aria-hidden="true"
            />
            <div
              className={common.abs}
              style={{ left: 11, top: 203, width: 44, height: 22 }}
            >
              <div
                className={styles.icon}
                style={{
                  left: 0,
                  top: 3,
                  width: 16,
                  height: 16,
                  background: 'var(--color-ff9633)',
                  borderRadius: 4,
                }}
                aria-hidden="true"
              />
              <div
                className={`${common.abs} ${common['typo-11']}`}
                style={{ left: 21, top: 0, width: 23, height: 22 }}
              >
                4.6
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className={common.abs}
            style={{ left: 207, top: 256, width: 185, height: 225 }}
          >
            <div
              className={`${common.abs} ${common['bg-ffffff']} ${common['radius-20']} ${common['shadow-2']}`}
              style={{ left: 0, top: 0, width: 185, height: 225 }}
            />
            <img
              className={common.abs}
              src={imgCard4}
              alt="Fried chicken burger"
              style={{
                left: 30,
                top: 25,
                width: 145,
                height: 100.59375,
                objectFit: 'cover',
              }}
            />
            <div
              className={`${common.abs} ${common['bg-000000']}`}
              style={{
                left: 41.5,
                top: 110,
                width: 112,
                height: 11,
                borderRadius: '50%',
                opacity: 0.2,
              }}
            />
            <div
              className={`${common.abs} ${common['typo-10']}`}
              style={{
                left: 11,
                top: 136,
                width: 158,
                height: 44,
                whiteSpace: 'pre-line',
                overflowWrap: 'break-word',
                textAlign: 'left',
              }}
            >
              Hamburger
              <br />
              Fried Chicken Burger
            </div>
            <div
              className={styles.icon}
              style={{
                left: 145,
                top: 201,
                width: 24,
                height: 24,
                borderRadius: 4,
              }}
              aria-hidden="true"
            />
            <div
              className={common.abs}
              style={{ left: 11, top: 203, width: 44, height: 22 }}
            >
              <div
                className={styles.icon}
                style={{
                  left: 0,
                  top: 3,
                  width: 16,
                  height: 16,
                  background: 'var(--color-ff9633)',
                  borderRadius: 4,
                }}
                aria-hidden="true"
              />
              <div
                className={`${common.abs} ${common['typo-11']}`}
                style={{ left: 21, top: 0, width: 23, height: 22 }}
              >
                4.5
              </div>
            </div>

            <div
              className={styles.icon}
              style={{
                left: 172.820556640625,
                top: -38.5,
                width: 26.679412841796875,
                height: 27,
                background: 'var(--color-ffffff)',
                borderRadius: '50%',
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Bottom navigation blob */}
        <div
          className={common.abs}
          style={{
            left: -19,
            top: 782,
            width: 456,
            height: 90,
            zIndex: 1,
          }}
        >
          <div
            className={`${common.abs} ${common['bg-ef2a39']}`}
            style={{
              left: 0,
              top: 0,
              width: 456,
              height: 90,
              borderRadius: 24,
            }}
          />
          <div
            className={`${common.abs} ${common['bg-d9d9d9']}`}
            style={{
              left: 193,
              top: -41,
              width: 82,
              height: 82,
              borderRadius: '50%',
            }}
          />
          <div
            className={`${common.abs} ${common['bg-ef2a39']}`}
            style={{
              left: 122,
              top: 0,
              width: 82,
              height: 82,
              borderRadius: '50%',
            }}
          />
          <div
            className={`${common.abs} ${common['bg-ef2a39']}`}
            style={{
              left: 264,
              top: 0,
              width: 82,
              height: 82,
              borderRadius: '50%',
            }}
          />
        </div>

        {/* Bottom nav icons */}
        <div
          className={styles.icon}
          style={{
            left: 51,
            top: 799,
            width: 24,
            height: 24,
            background: 'transparent',
            borderRadius: 4,
            zIndex: 2,
          }}
          aria-hidden="true"
        />
        <div
          className={styles.icon}
          style={{
            left: 133,
            top: 799,
            width: 24,
            height: 24,
            background: 'transparent',
            borderRadius: 4,
            zIndex: 2,
          }}
          aria-hidden="true"
        />
        <div
          className={styles.icon}
          style={{
            left: 314,
            top: 799,
            width: 24,
            height: 24,
            background: 'transparent',
            borderRadius: 4,
            zIndex: 2,
          }}
          aria-hidden="true"
        />
        <div
          className={common.abs}
          style={{
            left: 61,
            top: 831,
            width: 4,
            height: 4,
            borderRadius: '50%',
            zIndex: 2,
            background: 'var(--color-ffffff)',
          }}
        />

        {/* Floating add button */}
        <div
          className={common.abs}
          style={{ left: 199, top: 734, width: 72, height: 72, zIndex: 3 }}
        >
          <div
            className={`${common.abs} ${common['bg-ef2a39']} ${common['shadow-3']}`}
            style={{ left: 0, top: 0, width: 72, height: 72, borderRadius: '50%' }}
          />
          <div
            className={common.abs}
            style={{
              left: 28,
              top: 34,
              width: 16,
              height: 0,
              borderTop: '5px solid var(--color-ffffff)',
            }}
          />
          <div
            className={common.abs}
            style={{
              left: 36,
              top: 26,
              width: 0,
              height: 16,
              borderLeft: '5px solid var(--color-ffffff)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
